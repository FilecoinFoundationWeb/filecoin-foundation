import type { Icon, IconWeight } from '@phosphor-icons/react'

export type IconProps = {
  component: Icon
  color?: keyof typeof colorStyles
  size?: number
  weight?: IconWeight
}

const colorStyles = {
  inherit: 'text-inherit',
  'brand-200': 'text-brand-200',
  'brand-300': 'text-brand-300',
  'brand-400': 'text-brand-400',
  'green-400': 'text-green-400',
  'red-400': 'text-red-400',
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
