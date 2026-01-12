import { clsx } from 'clsx'

import { capitalize } from '../utils'

import { Icon, type IconProps } from './Icon'

export type BadgeProps = {
  icon?: IconProps['component']
  variant?: keyof typeof variantClasses
  children: string
}

const variantClasses = {
  primary: {
    wrapper:
      'border-brand-600 in-[.light-section]:text-brand-950 in-[.dark-section]:text-zinc-50',
    icon: 'in-[.light-section]:text-brand-950 in-[.dark-section]:text-zinc-50',
  },
  secondary: {
    wrapper: 'text-amber-950 border-amber-600',
    icon: 'text-amber-600',
  },
  tertiary: {
    wrapper: 'text-red-950 border-red-600',
    icon: 'text-red-600',
  },
  solid: {
    wrapper: 'text-white bg-brand-800 border-brand-800',
    icon: 'text-white',
  },
} as const

export function Badge({ icon, variant = 'primary', children }: BadgeProps) {
  const styles = variantClasses[variant]

  return (
    <span
      className={clsx(
        'flex items-center gap-1 rounded-full border px-4 py-1 text-sm/5 font-medium',
        styles.wrapper,
      )}
    >
      {icon && (
        <span className={styles.icon}>
          <Icon component={icon} size={16} />
        </span>
      )}
      {capitalize(children)}
    </span>
  )
}
