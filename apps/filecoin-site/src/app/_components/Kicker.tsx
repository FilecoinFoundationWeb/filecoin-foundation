import { clsx } from 'clsx'

export type KickerProps = {
  children: React.ReactNode
  backgroundVariant?: 'light' | 'dark'
  size?: 'sm' | 'md'
}

const colorStyles = {
  light: 'text-zinc-950',
  dark: 'text-white',
}

const sizeStyles = {
  sm: 'text-sm',
  md: 'text-base',
}

export function Kicker({
  children,
  backgroundVariant = 'dark',
  size = 'md',
}: KickerProps) {
  const combinedClassName = clsx(
    'font-mono text-base',
    colorStyles[backgroundVariant],
    sizeStyles[size],
  )
  return <span className={combinedClassName}>{children}</span>
}

