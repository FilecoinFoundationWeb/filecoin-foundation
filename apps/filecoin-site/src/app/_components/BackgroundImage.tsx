import Image, { type StaticImageData } from 'next/image'

import { clsx } from 'clsx'

type BackgroundImageProps = {
  src: string
  withOpacity?: boolean
  overlayVariant?: keyof typeof OVERLAY_CLASSES
  children?: React.ReactNode
} & Pick<StaticImageData, 'blurDataURL'>

const OVERLAY_CLASSES = {
  dark: 'bg-zinc-950/60',
  light: 'bg-zinc-950/30',
}

export function BackgroundImage({
  src,
  overlayVariant,
  withOpacity,
  children,
  blurDataURL,
}: BackgroundImageProps) {
  return (
    <div className="relative">
      <Image
        fill
        priority
        quality={100}
        sizes="100vw"
        src={src}
        alt=""
        className={clsx(
          '-z-20 object-cover object-center',
          withOpacity && 'opacity-70',
        )}
        {...(blurDataURL && {
          placeholder: 'blur',
          blurDataURL,
        })}
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
