import clsx from 'clsx'

type BadgeProps = {
  variant?: 'default'
  children: string
}

const variantStyles = {
  default: 'border-brand-500',
}

export function Badge({ variant = 'default', children }: BadgeProps) {
  const baseStyles =
    'inline-block max-w-fit rounded-lg border bg-brand-800 px-2 py-1 text-center text-xs font-semibold capitalize text-brand-100'

  return (
    <span className={clsx(baseStyles, variantStyles[variant])}>{children}</span>
  )
}
