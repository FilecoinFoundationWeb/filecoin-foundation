import { clsx } from 'clsx'

import { Icon, type IconProps } from './Icon'

const styles = {
  base: 'inline-flex max-w-fit gap-1 rounded-lg border bg-brand-800 px-2 py-1 text-xs font-semibold capitalize text-brand-100',
  variants: {
    primary: {
      border: 'border-brand-100',
    },
    secondary: {
      border: 'border-brand-500',
    },
    callout: {
      border: 'border-red-400',
    },
  },
} as const

type TagVariant = keyof typeof styles.variants

export type TagProps = {
  variant?: TagVariant
  icon?: IconProps['component']
  children: string
}

export function TagLabel({ variant = 'secondary', icon, children }: TagProps) {
  const { base, variants } = styles

  return (
    <span className={clsx(base, variants[variant].border)}>
      {icon && <Icon component={icon} size={16} />}
      {children}
    </span>
  )
}
