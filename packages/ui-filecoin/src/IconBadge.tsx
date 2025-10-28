import type { Icon as PhosphorIcon } from '@phosphor-icons/react'
import clsx from 'clsx'

const ICON_CONFIG = {
  sm: {
    containerSize: 'size-10 min-w-10',
    iconSize: 20,
  },
  md: {
    containerSize: 'size-15 min-w-15',
    iconSize: 30,
  },
} as const

const VARIANTS = {
  outline: 'border-brand-500 bg-transparent text-brand-500',
  filled: 'border-brand-700 bg-brand-700 text-[var(--color-text-base)]',
}

export type IconBadgeProps = {
  component: PhosphorIcon
  size?: keyof typeof ICON_CONFIG
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
        'grid flex-shrink-0 place-items-center rounded-full border-2',
        VARIANTS[variant],
        config.containerSize,
      )}
    >
      <Icon width={config.iconSize} height={config.iconSize} />
    </div>
  )
}
