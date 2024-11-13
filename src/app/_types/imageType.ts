import type { StaticImageData } from 'next/image'

export type ImageProps = {
  src: string
  alt: string
}

export type ImageObjectFit = {
  objectFit?: 'contain' | 'cover'
}

export type StaticImageProps = {
  data: StaticImageData
  alt: string
}
