import Image, { type ImageProps } from 'next/image'

import clsx from 'clsx'

import { StaticImage, type StaticImageProps } from '@/components/StaticImage'

export type DynamicImageProps = {
  src: string
  fallback: StaticImageProps
  objectFit?: 'contain' | 'cover'
} & Omit<ImageProps, 'objectFit'>

export function DynamicImage({
  src,
  alt,
  objectFit = 'cover',
  className,
  fallback,
  ...rest
}: DynamicImageProps) {
  if (!src) {
    return <StaticImage {...fallback} />
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={clsx(
        className,
        objectFit === 'cover' && 'object-cover',
        objectFit === 'contain' && 'object-contain',
      )}
      {...rest}
    />
  )
}
