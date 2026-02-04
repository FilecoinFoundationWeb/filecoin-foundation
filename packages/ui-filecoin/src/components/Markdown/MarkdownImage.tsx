import type { ComponentPropsWithoutRef } from 'react'

import * as Sentry from '@sentry/nextjs'
import Image from 'next/image'

import { buildImageSizeProp } from '../../utils/buildImageSizeProp'

const IMAGE_DIMENSIONS = {
  containerWidth: 672,
  aspectRatioHeight: Math.round(672 * (9 / 16)),
} as const

type MarkdownImageProps = ComponentPropsWithoutRef<'img'>

export function MarkdownImage({ src, alt }: MarkdownImageProps) {
  const commonProps = {
    className: 'rounded-lg',
    quality: 100,
    width: IMAGE_DIMENSIONS.containerWidth,
    height: IMAGE_DIMENSIONS.aspectRatioHeight,
    sizes: buildImageSizeProp({
      startSize: '100vw',
      md: `${IMAGE_DIMENSIONS.containerWidth}px`,
    }),
  }

  if (!src) {
    const errorMessage = 'Invalid markdown: image is missing src attribute'

    console.error(errorMessage)
    Sentry.captureException(new Error(errorMessage))

    return null
  }

  return <Image {...commonProps} src={src as string} alt={alt || ''} />
}
