import Image, { type ImageProps } from 'next/image'

import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import type {
  ImageObjectFit,
  StaticImageProps,
} from '@filecoin-foundation/utils/types/imageType'

export type PageHeaderImageProps = (StaticImageProps | ImageProps) & {
  objectFit?: ImageObjectFit
}

export function PageHeaderImage(image: PageHeaderImageProps) {
  const isStaticImage = 'data' in image

  const commonProps = {
    alt: image.alt,
    priority: true,
    quality: 100,
    sizes: buildImageSizeProp({ startSize: '390px' }),
  }

  if (isStaticImage) {
    return (
      <Image
        {...commonProps}
        className="aspect-square h-auto w-full max-w-96 object-contain"
        src={image.data}
      />
    )
  }

  return (
    <div className="relative aspect-video">
      <Image
        fill
        {...commonProps}
        className="h-full w-full"
        src={image.src}
        alt={commonProps.alt}
      />
    </div>
  )
}
