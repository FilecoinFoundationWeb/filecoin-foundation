import { type Icon } from '@phosphor-icons/react'

export type IconProps = {
  component: Icon
  color?: keyof typeof colorStyles
  size?: number
  weight?: 'light' | 'regular' | 'bold'
  inheritHoverStyle?: boolean
}

const colorStyles = {
  inherit: 'text-inherit',
  'brand-200': 'text-brand-200',
  'brand-300': 'text-brand-300',
  'brand-400': 'text-brand-400',
  success: 'text-green-400',
  warning: 'text-red-400',
}

export function Icon({
  component,
  color = 'inherit',
  size = 24,
  weight = 'regular',
  inheritHoverStyle,
}: IconProps) {
  const Component = component

const className = clsx(colorStyles[color], {
  'hover:text-inherit': inheritHoverStyle,
});

  return (
    <span aria-hidden="true" className={className}>
      <Component size={size} weight={weight} />
    </span>
  )
}
