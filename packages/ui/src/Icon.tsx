import type { Icon, IconWeight } from '@phosphor-icons/react'

export type IconProps = {
  component: Icon
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
  component,
  color = 'inherit',
  size = 24,
  weight = 'regular',
}: IconProps) {
  const Component = component

  return (
    <span aria-hidden="true" className={colorStyles[color]}>
      <Component size={size} weight={weight} />
    </span>
  )
}
