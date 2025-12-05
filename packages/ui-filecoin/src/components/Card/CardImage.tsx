import { clsx } from 'clsx'
import Image, { type ImageProps } from 'next/image'

import type { ImageObjectFit, StaticImageProps } from '../../types/imageType'
import { buildImageSizeProp } from '../../utils/buildImageSizeProp'

export type CardImageProps = {
  padding?: boolean
  priority?: boolean
  sizes?: string
  aspectRatio?: 'square' | 'video'
} & ImageObjectFit &
  (StaticImageProps | ImageProps)

type ImageComponentProps = {
  image: CardImageProps
}

export function CardImage({ image }: ImageComponentProps) {
  const isStaticImage = 'data' in image
  const ASPECT_RATIO =
    image.aspectRatio === 'square' ? 'aspect-square' : 'aspect-video'

  const commonProps = {
    alt: image.alt,
    priority: image.priority,
    quality: 100,
    sizes:
      image.sizes || buildImageSizeProp({ startSize: '100vw', lg: '490px' }),
    className: clsx(
      'card-image',
      image.objectFit === 'cover' && 'object-cover',
      image.objectFit === 'contain' && 'object-contain',
      image.padding && 'card-image-spacing',
    ),
  }

  if (isStaticImage) {
    return (
      <Image
        {...commonProps}
        className={clsx(commonProps.className, ASPECT_RATIO)}
        src={image.data}
        alt={commonProps.alt}
      />
    )
  }

  return (
    <div className={clsx('relative', ASPECT_RATIO)}>
      <Image
        fill
        {...commonProps}
        className={clsx(commonProps.className, 'h-full w-full')}
        src={image.src}
        alt={commonProps.alt}
      />
    </div>
  )
}
