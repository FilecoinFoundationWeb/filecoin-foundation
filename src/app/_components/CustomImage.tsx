import Image from 'next/image'

type Props = {
  src: string
  alt: string
}

export default function CustomImage({ src, alt }: Props) {
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
