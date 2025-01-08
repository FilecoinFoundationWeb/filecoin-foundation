import type { StaticImageData } from 'next/image'

export type ImageProps = {
  alt: string,
  src: string
}

export type ImageObjectFit = {
  objectFit?: 'contain' | 'cover'
}

export type StaticImageProps = {
  alt: string,
  data: StaticImageData
}
