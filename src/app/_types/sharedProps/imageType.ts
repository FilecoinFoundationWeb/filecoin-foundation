import { StaticImageData, ImageProps as NextImageProps } from 'next/image'

export type ImageProps = Omit<NextImageProps, 'src' | 'objectFit'> & {
  url: string
}

export type StaticImageProps = { src: StaticImageData; alt: string }
