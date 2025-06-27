import { clsx } from 'clsx'
import Image, { type ImageProps } from 'next/image'

import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import type {
  ImageObjectFit,
  StaticImageProps,
} from '@filecoin-foundation/utils/types/imageType'

export type PageHeaderImageProps = (StaticImageProps | ImageProps) & {
  objectFit?: ImageObjectFit
  padding?: boolean
}

export function PageHeaderImage(image: PageHeaderImageProps) {
  const isStaticImage = 'data' in image

  const commonProps = {
    alt: image.alt,
    priority: true,
    quality: 100,
    sizes: buildImageSizeProp({ startSize: '100vw', lg: '490px' }),
    className: clsx(
      'page-header-image',
      image.objectFit === 'cover' && 'object-cover',
      image.objectFit === 'contain' && 'object-contain',
      image.padding && 'page-header-image-spacing',
    ),
  }

  if (isStaticImage) {
    return (
      <Image
        {...commonProps}
        className={clsx(commonProps.className, 'aspect-video')}
        src={image.data}
        alt={commonProps.alt}
      />
    )
  }

  return (
    <div className="relative aspect-video">
      <Image fill {...commonProps} src={image.src} />
    </div>
  )
}
