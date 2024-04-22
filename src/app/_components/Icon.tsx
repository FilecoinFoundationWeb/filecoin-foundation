import { type Icon } from '@phosphor-icons/react'

export type IconProps = {
  component: Icon
  color: 'inherit' | 'brand-300'
  size?: number
  weight?: 'light' | 'regular' | 'bold'
}

const colorStyles = {
  inherit: 'text-inherit',
  'brand-300': 'text-brand-300',
}

export function Icon({
  component,
  color,
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
