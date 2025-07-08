import { clsx } from 'clsx'

export type BadgeProps = {
  children: React.ReactNode
  backgroundVariant?: 'light' | 'dark'
}

const colorStyles = {
  light: 'text-zinc-950',
  dark: 'text-white',
}

export function Badge({ children, backgroundVariant = 'dark' }: BadgeProps) {
  return (
    <span
      className={clsx('font-mono text-base', colorStyles[backgroundVariant])}
    >
      {children}
    </span>
  )
}
