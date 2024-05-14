import clsx from 'clsx'

type BadgeProps = {
  borderColor?: 'brand-100' | 'brand-500'
  children: string
}

const borderStyles = {
  'brand-100': 'border-brand-100',
  'brand-500': 'border-brand-500',
}

export function Badge({ borderColor = 'brand-500', children }: BadgeProps) {
  const baseStyles =
    'inline-block max-w-fit rounded-lg border bg-brand-800 px-2 py-1 text-xs font-semibold capitalize text-brand-100'

  return (
    <span className={clsx(baseStyles, borderStyles[borderColor])}>
      {children}
    </span>
  )
}
