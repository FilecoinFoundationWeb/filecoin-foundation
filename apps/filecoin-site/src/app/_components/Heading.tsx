import { clsx } from 'clsx'

export type HeadingProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  variant: '6xl-medium' | '5xl-medium' | 'xl-medium'
  backgroundVariant: 'light' | 'dark'
  className?: string
  children: string
}

const variantStyles = {
  '6xl-medium': 'text-6xl font-medium',
  '5xl-medium': 'text-5xl font-medium',
  'xl-medium': 'text-xl font-medium',
}

const colorStyles = {
  light: 'text-zinc-950',
  dark: 'text-white',
}

export function Heading({
  tag,
  variant,
  backgroundVariant,
  className,
  children,
}: HeadingProps) {
  const Tag = tag

  const combinedClassName = clsx(
    variantStyles[variant],
    colorStyles[backgroundVariant],
    className,
  )

  return <Tag className={combinedClassName}>{children}</Tag>
}
