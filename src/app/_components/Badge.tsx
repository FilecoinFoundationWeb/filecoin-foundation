import clsx from 'clsx'

type BadgeProps = {
  variant?: 'primary' | 'ghost'
  children: string
}

const variantStyles = {
  primary: 'bg-brand-300 text-brand-800',
  ghost: 'bg-brand-800 border border-brand-100 text-brand-100',
}

export function Badge({ variant = 'primary', children }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-block max-w-fit rounded-lg px-2 py-1 text-center text-xs font-semibold',
        variantStyles[variant],
      )}
    >
      {children}
    </span>
  )
}
