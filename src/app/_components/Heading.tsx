import clsx from 'clsx'

import { type IconProps, Icon } from '@/components/Icon'

export type HeadingProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  variant: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'kicker'
  className?: string
  iconProps?: IconProps
  isClamped?: boolean
  children: string
}

const variantStyles = {
  '4xl': 'text-4xl font-bold',
  '3xl': 'text-3xl font-bold',
  '2xl': 'text-2xl font-bold',
  xl: 'text-xl font-bold',
  lg: 'text-lg font-bold',
  md: 'text-md font-medium',
  sm: 'text-sm font-medium',
  xs: 'text-xs font-light',
  kicker: 'text-sm uppercase tracking-widest',
}

export function Heading({
  tag,
  variant,
  iconProps,
  isClamped,
  children,
}: HeadingProps) {
  const Tag = tag
  const { component: icon, size } = iconProps ?? {}

  const baseStyles = 'text-balance'
  const combinedClassName = clsx(
    baseStyles,
    variantStyles[variant],
    isClamped && 'line-clamp-2 text-ellipsis',
  )

  if (icon) {
    return (
      <div className="inline-flex items-center gap-3">
        <Icon component={icon} color="brand-300" size={size} />
        <Tag className={combinedClassName}>{children}</Tag>
      </div>
    )
  }

  return <Tag className={combinedClassName}>{children}</Tag>
}
