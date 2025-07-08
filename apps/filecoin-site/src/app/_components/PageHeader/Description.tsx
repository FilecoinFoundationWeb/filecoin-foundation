import { clsx } from 'clsx'

import type { BackgroundVariant } from '@/styles/theme'

export type DescriptionProps = {
  children: React.ReactNode
  backgroundVariant: BackgroundVariant
}

const textColorStyles = {
  light: 'text-zinc-600',
  dark: 'text-white',
}

export function Description({ backgroundVariant, children }: DescriptionProps) {
  const combinedClassName = clsx(textColorStyles[backgroundVariant])

  return <p className={clsx('text-xl', combinedClassName)}>{children}</p>
}
