import { clsx } from 'clsx'
import type { ImageProps } from 'next/image'

import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import type {
  ImageObjectFit,
  StaticImageProps,
} from '@filecoin-foundation/utils/types/imageType'

export type PageHeaderImageProps = (StaticImageProps | ImageProps) & {
  objectFit?: ImageObjectFit
}

export function getPageHeaderImageProps(
  image: PageHeaderImageProps,
  sizeInput: Parameters<typeof buildImageSizeProp>[0],
) {
  return {
    alt: image.alt,
    priority: true,
    quality: 100,
    sizes: buildImageSizeProp(sizeInput),
    className: clsx(
      image.objectFit === 'cover' && 'object-cover',
      image.objectFit === 'contain' && 'object-contain',
    ),
  }
}
