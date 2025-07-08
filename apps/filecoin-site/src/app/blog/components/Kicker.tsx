import { clsx } from 'clsx'

export type KickerProps = {
  children: React.ReactNode
  backgroundVariant?: 'light' | 'dark'
}

const colorStyles = {
  light: 'text-zinc-950',
  dark: 'text-white',
}

export function Kicker({ children, backgroundVariant = 'dark' }: KickerProps) {
  return (
    <span
      className={clsx('font-mono text-base', colorStyles[backgroundVariant])}
    >
      {children}
    </span>
  )
}
