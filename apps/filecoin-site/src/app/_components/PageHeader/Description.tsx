import { clsx } from 'clsx'

import type { BackgroundVariant } from '@/styles/theme'

export type DescriptionProps = {
  children: React.ReactNode
  backgroundVariant: BackgroundVariant
}

const textColorStyles = {
  light: 'text-zinc-950',
  dark: 'text-zinc-50',
}

export function Description({ backgroundVariant, children }: DescriptionProps) {
  return (
    <p className={clsx('text-xl', textColorStyles[backgroundVariant])}>
      {children}
    </p>
  )
}
