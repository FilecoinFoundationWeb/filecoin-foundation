import clsx from 'clsx'

type BadgeProps = {
  variant?: 'primary' | 'ghost',
  className?: string,
  children: React.ReactNode
}

const variantStyles = {
  primary:
    'bg-brand-300 text-brand-800',
  ghost:
    'bg-transparent text-brand-100 border-current border',
}

export function Badge({ variant = "primary", className, children }: BadgeProps) {
  
  const baseStyles =
    'inline-block max-w-fit rounded-lg font-semibold px-2 py-1 text-center text-xs'

  className = clsx(baseStyles, variantStyles[variant], className)

  return (
      <span className={className}>
        {children}
      </span>
    )
}
