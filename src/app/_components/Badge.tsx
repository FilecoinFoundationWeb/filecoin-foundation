import clsx from 'clsx'

import { Icon, IconProps } from './Icon'

type BadgeProps = {
  variant?: 'default'
  icon?: IconProps['component']
  children: string
}

const variantStyles = {
  default: 'border-brand-500',
}

export function Badge({ variant = 'default', icon, children }: BadgeProps) {
  const baseStyles =
    'inline-block max-w-fit flex gap-1 rounded-lg border bg-brand-800 px-2 py-1 text-center text-xs font-semibold capitalize text-brand-100'

  return (
    <span className={clsx(baseStyles, variantStyles[variant])}>
      {icon && <Icon component={icon} size={16} />}
      {children}
    </span>
  )
}
