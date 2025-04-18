import Image from 'next/image'
import * as Sentry from '@sentry/node'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'
import type { ComponentPropsWithoutRef } from 'react'

const IMAGE_DIMENSIONS = {
  containerWidth: 672,
  aspectRatioHeight: Math.round(672 * (9 / 16)),
} as const

type MarkdownImageProps = ComponentPropsWithoutRef<'img'> & {
  fallbackImage: StaticImageProps
}

export function MarkdownImage({
  src,
  alt,
  fallbackImage,
}: MarkdownImageProps) {
  const commonProps = {
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

    return (
      <Image
        {...commonProps}
        src={fallbackImage.data}
        alt={fallbackImage.alt}
      />
    )
  }

  return <Image {...commonProps} src={src} alt={alt || ''} />
} 
