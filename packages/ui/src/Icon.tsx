import type { ComponentType, SVGProps } from 'react'

import type { Icon as PhosphorIcon, IconWeight } from '@phosphor-icons/react'

export type IconProps = {
  component: PhosphorIcon | ComponentType<SVGProps<SVGSVGElement>>
  color?: keyof typeof colorStyles
  size?: number
  weight?: IconWeight
}

const colorStyles = {
  inherit: 'inherit',
  primary: 'text-(--color-icon-primary)',
  accent: 'text-(--color-icon-accent)',
  subtle: 'text-(--color-icon-subtle)',
  success: 'text-(--color-icon-success)',
  error: 'text-(--color-icon-error)',
}

export function Icon({
  component: Component,
  color = 'inherit',
  size = 24,
  weight = 'regular',
}: IconProps) {
  return (
    <span aria-hidden="true" className={colorStyles[color]}>
      <Component weight={weight} width={size} height={size} />
    </span>
  )
}
