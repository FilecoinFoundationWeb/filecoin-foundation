import Image, { type ImageProps } from 'next/image'

import { clsx } from 'clsx'

import type { ImageObjectFit } from '@/types/imageType'

import { StaticImage, type StaticImageProps } from '@/components/StaticImage'

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
  fill,
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
        fill={typeof fallback.fill === 'boolean' ? fallback.fill : fill}
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
      fill={fill}
      className={clsx(
        className,
        objectFit === 'cover' && 'object-cover',
        objectFit === 'contain' && 'object-contain',
      )}
      {...rest}
    />
  )
}
