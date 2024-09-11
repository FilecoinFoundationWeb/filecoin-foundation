import type { StaticImageData } from 'next/image'

export type StaticImageDataWithAlt = StaticImageData & {
  alt: string
}

type ImageLayoutProps = {
  sizes?: string
  fill?: boolean
  padding?: boolean
  priority?: boolean
  objectFit?: 'cover' | 'contain'
}

export type DynamicImageData = {
  src: string
  alt?: string
}

type StaticImageWithOptions = StaticImageDataWithAlt & ImageLayoutProps
type ExternalImageWithOptions = DynamicImageData & ImageLayoutProps

export type CardImageSource = StaticImageWithOptions | ExternalImageWithOptions
