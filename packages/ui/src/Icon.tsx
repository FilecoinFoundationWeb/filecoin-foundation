import type { Icon as PhosphorIcon, IconWeight } from '@phosphor-icons/react'

export type IconProps = {
  component: PhosphorIcon | React.FC<React.SVGProps<SVGSVGElement>>
  color?: keyof typeof colorStyles
  width?: number
  height?: number
  size?: number
  weight?: IconWeight
}

type PhosphorIconProps = IconProps & {
  component: PhosphorIcon
  weight?: IconWeight
}

type SvgIconProps = IconProps & {
  component: React.FC<React.SVGProps<SVGSVGElement>>
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
}: PhosphorIconProps | SvgIconProps) {
  const Component = component

  return (
    <span aria-hidden="true" className={colorStyles[color]}>
      <Component size={size} weight={weight} height={size} width={size} />
    </span>
  )
}
