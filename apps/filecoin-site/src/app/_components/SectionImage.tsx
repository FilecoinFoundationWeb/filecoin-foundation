import Image, { type StaticImageData, type ImageProps } from 'next/image'

type SectionImageProps = {
  data: StaticImageData
} & Pick<ImageProps, 'alt' | 'priority'>

export function SectionImage({ data, alt, priority }: SectionImageProps) {
  return (
    <Image
      quality={85}
      sizes="100vw"
      src={data}
      alt={alt}
      priority={priority}
      className="w-full object-contain"
    />
  )
}
