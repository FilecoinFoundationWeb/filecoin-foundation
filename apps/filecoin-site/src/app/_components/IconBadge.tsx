import clsx from 'clsx'

import { type IconProps, Icon } from '@filecoin-foundation/ui/Icon'

type IconBadgeProps = {
  icon: IconProps['component']
  size?: keyof typeof ICON_CONFIG
  className?: string
}

const ICON_CONFIG = {
  sm: {
    containerSize: 'size-10',
    iconSize: 24,
  },
  md: {
    containerSize: 'size-[60px]',
    iconSize: 30,
  },
} as const

export function IconBadge({ icon, size = 'md', className }: IconBadgeProps) {
  const config = ICON_CONFIG[size]

  return (
    <div
      className={clsx(
        'border-brand-500 text-brand-500 grid place-items-center rounded-full border-2',
        config.containerSize,
        className,
      )}
    >
      <Icon component={icon} size={config.iconSize} />
    </div>
  )
}
