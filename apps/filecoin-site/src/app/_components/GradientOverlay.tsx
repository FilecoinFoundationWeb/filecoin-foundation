import { clsx } from 'clsx'

const sharedStyles = 'pointer-events-none absolute -z-10'

const variants = {
  'to-bottom': clsx(
    sharedStyles,
    'inset-x-0 bottom-0 h-full bg-linear-to-b from-transparent via-transparent via-50% to-zinc-950/95',
  ),
  'to-top': clsx(
    sharedStyles,
    'inset-x-0 top-0 h-full bg-linear-to-t from-transparent via-transparent via-50% to-zinc-950/95',
  ),
  dual: clsx(
    sharedStyles,
    'inset-0 h-full bg-linear-to-b from-zinc-950/95 via-transparent to-zinc-950/95',
  ),
}

type GradientOverlayProps = {
  variant?: keyof typeof variants
}

export function GradientOverlay({
  variant = 'to-bottom',
}: GradientOverlayProps) {
  return <div className={variants[variant]} />
}
