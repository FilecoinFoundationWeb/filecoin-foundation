'use server'

import fs from 'fs/promises'
import path from 'path'

import Image, { type ImageProps } from 'next/image'

import { graphicsData } from '@/data/graphicsData'

export type SmartImageProps = {
  src?: string
} & Omit<ImageProps, 'src'>

const { data: fallbackSrc, alt: fallbackAlt } = graphicsData.imageFallback

export async function SmartImage({ src, alt, ...props }: SmartImageProps) {
  if (!src) {
    return <Image src={fallbackSrc} alt={fallbackAlt} {...props} />
  }

  const isValid = await checkImageValidity(src)

  return (
    <Image
      src={isValid ? src : fallbackSrc}
      alt={isValid ? alt : fallbackAlt}
      {...props}
    />
  )
}

async function checkImageValidity(src: NonNullable<SmartImageProps['src']>) {
  const isLocalAssetImage = src.startsWith('/assets')

  if (isLocalAssetImage) {
    return checkLocalAsset(src)
  }

  return checkRemoteImage(src)
}

async function checkRemoteImage(absoluteUrl: string) {
  try {
    const response = await fetch(absoluteUrl, { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}

async function checkLocalAsset(relativePath: string) {
  try {
    const publicPath = path.join(process.cwd(), 'public', relativePath)
    const stats = await fs.stat(publicPath)
    return stats.isFile()
  } catch {
    return false
  }
}
