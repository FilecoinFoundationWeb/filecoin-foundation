import Image from 'next/image'

type CustomImageProps = {
  src: string
  alt: string
}

export function CustomImage({ src, alt }: CustomImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={770}
      height={440}
      className="block h-auto object-contain"
    />
  )
}
