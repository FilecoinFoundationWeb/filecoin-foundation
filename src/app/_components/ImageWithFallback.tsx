import type { CSSProperties } from 'react'

import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import type { ImageProps } from 'next/image'

import { graphicsData } from '@/data/graphicsData'

type ImageWithFallbackProps = ImageProps & {
  fallbackStyle?: CSSProperties
}

const { src: fallbackSrc, alt: fallbackAlt } = graphicsData.imageFallback

async function getImageSrc(src: string | StaticImport) {
  const isStaticImport = typeof src === 'object'
  const isRemoteImage =
    typeof src === 'string' && (src.startsWith('http') || src.startsWith('//'))
  const noImage = !src

  switch (true) {
    case isStaticImport:
      return src
    case noImage:
      return fallbackSrc
    case isRemoteImage:
      const remoteImageExists = await checkRemoteImageExists(src)
      return remoteImageExists ? src : fallbackSrc
    default:
      return src
  }
}

async function checkRemoteImageExists(url: string) {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    return response.ok
  } catch (error) {
    return false
  }
}

export async function ImageWithFallback({
  src,
  alt,
  style,
  fallbackStyle,
  fill,
  width,
  height,
  ...props
}: ImageWithFallbackProps) {
  const imageSrc = await getImageSrc(src)

  const imageExists = imageSrc !== fallbackSrc

  const dimensionProps = fill ? { fill } : { width, height }

  return (
    <Image
      src={imageSrc}
      alt={imageExists ? alt : fallbackAlt}
      style={imageExists ? style : fallbackStyle}
      {...dimensionProps}
      {...props}
    />
  )
}
