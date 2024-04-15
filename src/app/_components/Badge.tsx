import clsx from 'clsx'

type BadgeProps = {
  variant?: 'primary' | 'ghost'
  children: React.ReactNode
}

const variantStyles = {
  primary: 'bg-brand-300 text-brand-800',
  ghost: 'bg-transparent text-brand-100 border-current border',
}

export function Badge({ variant = 'primary', children }: BadgeProps) {
  const baseStyles =
    'inline-block max-w-fit rounded-lg font-semibold px-2 py-1 text-center text-xs'

  const className = clsx(baseStyles, variantStyles[variant])

  return <span className={className}>{children}</span>
}
