import { clsx } from 'clsx'

export type DescriptionProps = {
  children: React.ReactNode
  backgroundVariant: 'light' | 'dark'
  className?: string
}

const colorStyles = {
  light: 'text-zinc-950',
  dark: 'text-white',
}

export function Description({
  backgroundVariant,
  className,
  children,
}: DescriptionProps) {
  const combinedClassName = clsx(colorStyles[backgroundVariant], className)

  return <p className={combinedClassName}>{children}</p>
}
