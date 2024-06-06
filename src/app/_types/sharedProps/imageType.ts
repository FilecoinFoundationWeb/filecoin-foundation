import { StaticImageData } from 'next/image'

export type ImageProps = {
  url: string | StaticImageData
  alt: string
}

export type ImageObjectFit = {
  objectFit?: 'contain' | 'cover'
}
