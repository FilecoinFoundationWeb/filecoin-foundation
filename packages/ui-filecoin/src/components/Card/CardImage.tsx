import { clsx } from 'clsx'
import Image, { type ImageProps } from 'next/image'

import type { StaticImageProps } from '../../types/imageType'
import { buildImageSizeProp } from '../../utils/buildImageSizeProp'

export type CardImageProps = {
  priority?: boolean
  sizes?: string
} & (StaticImageProps | ImageProps)

export function CardImage({ alt, priority, sizes, ...props }: CardImageProps) {
  const isStaticImage = 'data' in props

  const commonProps = {
    alt,
    priority,
    quality: 100,
    sizes: sizes || buildImageSizeProp({ startSize: '100vw', lg: '490px' }),
  }

  if (isStaticImage) {
    const { data, ...restProps } = props

    return (
      <Image
        {...restProps}
        {...commonProps}
        className="card-image aspect-video"
        src={data}
      />
    )
  }

  return (
    <div className="relative aspect-video">
      <Image {...props} {...commonProps} fill className="card-image" />
    </div>
  )
}
