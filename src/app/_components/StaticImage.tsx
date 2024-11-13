import Image, { type StaticImageData, type ImageProps } from 'next/image'

import { clsx } from 'clsx'

import type { ImageObjectFit } from '@/types/imageType'

export type StaticImageProps = {
  data: StaticImageData
} & ImageObjectFit &
  Omit<ImageProps, 'src' | keyof StaticImageData>

export function StaticImage({
  data,
  alt,
  placeholder = 'blur',
  objectFit = 'cover',
  className,
  ...rest
}: StaticImageProps) {
  return (
    <Image
      src={data}
      alt={alt}
      placeholder={placeholder}
      className={clsx(
        className,
        objectFit === 'cover' && 'object-cover',
        objectFit === 'contain' && 'object-contain',
      )}
      {...rest}
    />
  )
}
