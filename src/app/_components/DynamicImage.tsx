import Image, { type ImageProps } from 'next/image'

import clsx from 'clsx'

import { StaticImage, type StaticImageProps } from '@/components/StaticImage'

import { ImageObjectFit } from '@/types/sharedProps/imageType'

export type DynamicImageProps = {
  src: string
  fallback: StaticImageProps
} & ImageObjectFit &
  Omit<ImageProps, 'objectFit'>

export function DynamicImage({
  src,
  alt,
  objectFit = 'cover',
  className,
  fallback,
  priority,
  quality,
  sizes,
  ...rest
}: DynamicImageProps) {
  if (!src) {
    return (
      <StaticImage
        {...fallback}
        priority={fallback.priority || priority}
        quality={fallback.quality || quality}
        sizes={fallback.sizes || sizes}
        className={fallback.className || className}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      priority={priority}
      quality={quality}
      className={clsx(
        className,
        objectFit === 'cover' && 'object-cover',
        objectFit === 'contain' && 'object-contain',
      )}
      {...rest}
    />
  )
}
