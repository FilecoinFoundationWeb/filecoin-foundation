import Image, { type ImageProps } from 'next/image'
import { clsx } from 'clsx'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import type {
  ImageObjectFit,
  StaticImageProps,
} from '@filecoin-foundation/utils/types/imageType'

export type CardImageProps = (StaticImageProps | ImageProps) & {
  objectFit?: ImageObjectFit
  padding?: boolean
  priority?: boolean
  sizes?: string
  aspectRatio?: 'square' | 'video'
}

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