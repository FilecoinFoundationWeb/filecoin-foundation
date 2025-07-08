import { clsx } from 'clsx'

import type { BackgroundVariant } from '@/styles/theme'

export type KickerProps = {
  children: React.ReactNode
  backgroundVariant: BackgroundVariant
  size?: 'sm' | 'md'
}

const colorStyles = {
  light: 'text-zinc-800',
  dark: 'text-zinc-50',
}

const sizeStyles = {
  sm: 'text-sm',
  md: 'text-base',
}

export function Kicker({
  children,
  backgroundVariant,
  size = 'md',
}: KickerProps) {
  const combinedClassName = clsx(
    'font-mono text-base',
    colorStyles[backgroundVariant],
    sizeStyles[size],
  )
  return <span className={combinedClassName}>{children}</span>
}
