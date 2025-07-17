import Image, { type StaticImageData } from 'next/image'

type SectionImageProps = {
  src: StaticImageData
  alt: string
  width?: number
  height?: number
}

export function SectionImage({ src, alt, width, height }: SectionImageProps) {
  return (
    <Image
      width={width}
      height={height}
      quality={100}
      sizes="100vw"
      src={src}
      alt={alt}
      className="h-full w-full object-contain"
    />
  )
}
