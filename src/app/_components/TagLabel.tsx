import clsx from 'clsx'

import { Icon, IconProps } from './Icon'

type TagProps = {
  borderColor?: 'brand-100' | 'brand-500'
  icon?: IconProps['component']
  children: string
}

const borderStyles = {
  'brand-100': 'border-brand-100',
  'brand-500': 'border-brand-500',
}

export function TagLabel({
  borderColor = 'brand-500',
  icon,
  children,
}: TagProps) {
  const baseStyles =
    'inline-flex max-w-fit gap-1 rounded-lg border bg-brand-800 px-2 py-1 text-xs font-semibold capitalize text-brand-100'

  return (
    <span className={clsx(baseStyles, borderStyles[borderColor])}>
      {icon && <Icon component={icon} size={16} />}
      {children}
    </span>
  )
}
