import clsx from 'clsx'

import { Icon, IconProps } from './Icon'

type BadgeProps = {
  borderColor?: 'brand-100' | 'brand-500'
  icon?: IconProps['component']
  children: string
}

const borderStyles = {
  'brand-100': 'border-brand-100',
  'brand-500': 'border-brand-500',
}

export function Badge({
  borderColor = 'brand-500',
  icon,
  children,
}: BadgeProps) {
  const baseStyles =
    'inline-block max-w-fit rounded-lg border bg-brand-800 px-2 py-1 text-xs font-semibold capitalize text-brand-100 flex gap-1'

  return (
    <span className={clsx(baseStyles, borderStyles[borderColor])}>
      {icon && <Icon component={icon} size={16} />}
      {children}
    </span>
  )
}
