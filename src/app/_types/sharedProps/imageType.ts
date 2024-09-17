import type { StaticImageData } from 'next/image'

export type LocalImageData = StaticImageData & {
  alt: string
}

type ImageLayoutProps = {
  sizes?: string
  fill?: boolean
  padding?: boolean
  priority?: boolean
  objectFit?: 'cover' | 'contain'
}

export type RemoteImageData = {
  src: string
  alt?: string
  width?: number
  height?: number
}

export type LocalImageWithOptions = LocalImageData & ImageLayoutProps
export type RemoteImageWithOptions = RemoteImageData & ImageLayoutProps
