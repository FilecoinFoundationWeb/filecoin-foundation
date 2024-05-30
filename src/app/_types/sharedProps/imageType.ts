import { StaticImageData, ImageProps as NextImageProps } from 'next/image'

export type ImageProps = {
  url: string
} & Omit<NextImageProps, 'src' | 'objectFit'>

export type StaticImageProps = {
  data: StaticImageData
} & Omit<NextImageProps, 'src' | keyof StaticImageData>
