import clsx from 'clsx'

type HeadingProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  variant: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'kicker'
  className?: string
  children: React.ReactNode
}

const variantStyles = {
  '2xl': 'text-2xl font-bold',
  xl: 'text-xl font-bold',
  lg: 'text-lg font-bold',
  md: 'text-md font-medium',
  sm: 'text-sm font-medium',
  xs: 'text-xs font-light',
  kicker: 'text-sm uppercase tracking-widest',
}

export function Heading({
  tag,
  variant,
  className,
  children,
  ...rest
}: HeadingProps) {
  const Tag = tag
  const baseStyles = 'mb-4'

  className = clsx(baseStyles, variantStyles[variant], className)

  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  )
}
