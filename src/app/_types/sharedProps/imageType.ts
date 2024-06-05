import { StaticImageData } from 'next/image'

export type ImageProps = {
  url: string | StaticImageData
  alt: string
}
