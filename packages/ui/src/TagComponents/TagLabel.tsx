import { clsx } from 'clsx'

import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'

const variantClasses = {
  primary: 'tag-label--primary',
  secondary: 'tag-label--secondary',
  callout: 'tag-label--callout',
} as const

type TagVariant = keyof typeof variantClasses

export type TagProps = {
  variant?: TagVariant
  icon?: IconProps['component']
  children: string
}

export function TagLabel({ variant = 'primary', icon, children }: TagProps) {
  return (
    <span
      className={clsx(
        'tag-label inline-flex max-w-fit gap-1 py-1 text-xs font-semibold',
        variantClasses[variant],
      )}
    >
      {icon && <Icon component={icon} size={16} />}
      {children}
    </span>
  )
}
