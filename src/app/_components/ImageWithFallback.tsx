'use client'

import { useState, type CSSProperties } from 'react'

import Image from 'next/image'
import type { ImageProps } from 'next/image'

import { graphicsData } from '@/data/graphicsData'

type ImageWithFallbackProps = ImageProps & { fallbackStyle?: CSSProperties }

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const { src, alt, fill, width, height, fallbackStyle, style, ...imageRest } =
    props

  const {
    src: fallbackSrc,
    alt: fallbackAlt,
    width: fallbackWidth,
    height: fallbackHeight,
    ...fallbackRest
  } = graphicsData.imageFallback

  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const dimensionProps = fill ? { fill } : { width, height }

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(fallbackSrc)
    }
  }

  return (
    <Image
      src={imgSrc}
      alt={alt || fallbackAlt || ''}
      style={hasError ? fallbackStyle : style}
      onError={handleError}
      {...imageRest}
      {...fallbackRest}
      {...dimensionProps}
    />
  )
}
