import { type Icon } from '@phosphor-icons/react'

export type IconProps = {
  component: Icon
  size?: number
}

export function Icon({ component, size }: IconProps) {
  const Component = component

  return (
    <span className="text-brand-300" aria-hidden="true">
      <Component size={size || 24} />
    </span>
  )
}
