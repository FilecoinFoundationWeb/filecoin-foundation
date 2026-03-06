import { clsx } from 'clsx'

const sharedStyles = 'pointer-events-none absolute z-10 inset-y-0'

const horizontalEdgeStyles = {
  light: [
    clsx(sharedStyles, 'left-0 w-12 bg-linear-to-r from-white to-transparent'),
    clsx(sharedStyles, 'right-0 w-12 bg-linear-to-l from-white to-transparent'),
  ],
  dark: [
    clsx(
      sharedStyles,
      'left-0 w-20 bg-linear-to-r from-zinc-950 to-transparent',
    ),
    clsx(
      sharedStyles,
      'right-0 w-20 bg-linear-to-l from-zinc-950 to-transparent',
    ),
  ],
} as const

export type CarouselGradientProps = {
  variant: keyof typeof horizontalEdgeStyles
}

export function CarouselGradient({ variant }: CarouselGradientProps) {
  return (
    <>
      {horizontalEdgeStyles[variant].map((className, i) => (
        <div
          key={i}
          className={className}
          aria-hidden="true"
          role="presentation"
        />
      ))}
    </>
  )
}
