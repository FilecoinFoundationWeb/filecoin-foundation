import Image, { type ImageProps } from 'next/image'

import { clsx } from 'clsx'

import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import type {
  ImageObjectFit,
  StaticImageProps,
} from '@filecoin-foundation/utils/types/imageType'

type PageHeaderImageProps = (StaticImageProps | ImageProps) & ImageObjectFit

export function PageHeaderImage(image: PageHeaderImageProps) {
  const isStaticImage = 'data' in image

  const commonProps = {
    alt: image.alt,
    priority: true,
    quality: 100,
    sizes: buildImageSizeProp({ startSize: '390px' }),
    className: clsx(
      'page-header-image',
      image?.objectFit === 'cover' && 'object-cover',
      image?.objectFit === 'contain' && 'object-contain',
    ),
  }

  if (isStaticImage) {
    return (
      <Image
        {...commonProps}
        className={clsx(commonProps.className, 'aspect-square w-full max-w-96')}
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
