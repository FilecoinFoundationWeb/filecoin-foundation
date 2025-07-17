import Image, { type StaticImageData } from 'next/image'

type SectionImageProps = {
  image: {
    data: StaticImageData
    alt: string
  }
  priority?: boolean
}

export function SectionImage({ image, priority = false }: SectionImageProps) {
  return (
    <Image
      quality={85}
      sizes="100vw"
      src={image.data}
      alt={image.alt}
      priority={priority}
      className="h-full w-full object-contain"
    />
  )
}
