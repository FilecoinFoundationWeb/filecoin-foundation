'use server'

import fs from 'fs/promises'
import path from 'path'

import Image, { type ImageProps } from 'next/image'

import type { ImageObjectFit, StaticImageProps } from '@/types/imageType'

import { graphicsData } from '@/data/graphicsData'

const { data: fallbackSrc, alt: fallbackAlt } = graphicsData.imageFallback

export type SmartImageProps = {
  src?: string | StaticImageProps['data']
  alt?: string
  className?: string
  objectFit?: ImageObjectFit
  padding?: boolean
} & Omit<ImageProps, 'src' | 'alt' | 'className'>

export async function SmartImage({ src, alt = '', ...props }: SmartImageProps) {
  const imageSrc = await getImageSrc(src)

  const imageExists = imageSrc !== fallbackSrc

  return (
    <Image src={imageSrc} alt={imageExists ? alt : fallbackAlt} {...props} />
  )
}

async function getImageSrc(src: SmartImageProps['src']) {
  if (!src) {
    return fallbackSrc
  }
  const isAssetImage = typeof src === 'string' && src.startsWith('/assets')
  const isRemoteImage =
    typeof src === 'string' && (src.startsWith('http') || src.startsWith('//'))

  if (isAssetImage) {
    const assetExists = await checkAssetImageExists(src)
    return assetExists ? src : fallbackSrc
  }

  if (isRemoteImage) {
    const remoteImageExists = await checkRemoteImageExists(src)
    return remoteImageExists ? src : fallbackSrc
  }

  return src
}

async function checkRemoteImageExists(url: string) {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}

async function checkAssetImageExists(src: string) {
  const publicPath = path.join(process.cwd(), 'public', src)
  try {
    await fs.access(publicPath, fs.constants.F_OK)
    return true
  } catch {
    return false
  }
}
