import Image from 'next/image'

type BackgroundImageProps = {
  src: string
  withOverlay?: boolean
  children?: React.ReactNode
}

export function BackgroundImage({
  src,
  withOverlay = false,
  children,
}: BackgroundImageProps) {
  return (
    <div className="relative">
      <Image
        fill
        priority
        quality={100}
        sizes="100vw"
        src={src}
        className="-z-20 object-cover object-center"
        alt=""
      />
      {withOverlay && <div className="absolute inset-0 -z-10 bg-black/60" />}
      {children}
    </div>
  )
}
