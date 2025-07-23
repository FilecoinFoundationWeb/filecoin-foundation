import type { Icon as PhosphorIcon } from '@phosphor-icons/react'
import clsx from 'clsx'

const ICON_CONFIG = {
  sm: {
    containerSize: 'size-10 min-w-10',
    iconSize: 20,
  },
  md: {
    containerSize: 'size-[60px] min-w-[60px]',
    iconSize: 30,
  },
} as const

const VARIANTS = {
  outline: 'border-brand-500 text-brand-500 bg-transparent',
  filled: 'border-brand-700 bg-brand-700 text-zinc-50',
}

type IconSize = keyof typeof ICON_CONFIG

export type IconBadgeProps = {
  component: PhosphorIcon
  size?: IconSize
  variant?: keyof typeof VARIANTS
}

export function IconBadge({
  component: Icon,
  size = 'md',
  variant = 'outline',
}: IconBadgeProps) {
  const config = ICON_CONFIG[size]

  return (
    <div
      className={clsx(
        'grid place-items-center rounded-full border-2',
        VARIANTS[variant],
        config.containerSize,
      )}
    >
      <Icon width={config.iconSize} height={config.iconSize} />
    </div>
  )
}
