import Image from 'next/image'

import { clsx } from 'clsx'

type BackgroundImageProps = {
  src: string
  overlayVariant?: 'dark' | 'light'
  children?: React.ReactNode
}

const OVERLAY_CLASSES = {
  dark: 'bg-black/60',
  light: 'bg-black/30',
}

export function BackgroundImage({
  src,
  overlayVariant,
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
      {overlayVariant && (
        <div
          className={clsx(
            'absolute inset-0 -z-10',
            OVERLAY_CLASSES[overlayVariant],
          )}
        />
      )}
      {children}
    </div>
  )
}
