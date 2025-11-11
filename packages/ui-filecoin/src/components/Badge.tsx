import { clsx } from 'clsx'

import { Icon, type IconProps } from './Icon'

export type BadgeProps = {
  variant?: keyof typeof variantClasses
  children: string
  icon?: IconProps['component']
}

const variantClasses = {
  primary: 'text-brand-950 border-brand-600',
  secondary: 'text-amber-950 border-amber-600',
  tertiary: 'text-red-950 border-red-600',
  solid: 'text-white bg-brand-700 border-brand-700',
} as const

export function Badge({ children, variant = 'primary', icon }: BadgeProps) {
  return (
    <span
      className={clsx(
        'flex items-center gap-1 rounded-full border px-4 py-1 text-sm/5 font-medium capitalize',
        variantClasses[variant],
      )}
    >
      {icon && <Icon component={icon} size={16} />}
      {children}
    </span>
  )
}
