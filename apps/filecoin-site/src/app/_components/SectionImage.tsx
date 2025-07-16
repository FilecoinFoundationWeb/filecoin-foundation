import Image, { type StaticImageData } from 'next/image'

type SectionImageProps = {
  src: StaticImageData
  alt: string
  height?: string
}

export function SectionImage({ src, alt, height = 'h-96' }: SectionImageProps) {
  return (
    <div className={`relative ${height} w-full`}>
      <Image
        fill
        priority
        quality={100}
        sizes="100vw"
        src={src}
        alt={alt}
        className="object-cover object-center"
      />
    </div>
  )
}
