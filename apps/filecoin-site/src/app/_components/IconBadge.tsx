import clsx from 'clsx'

import { type IconProps, Icon } from '@filecoin-foundation/ui/Icon'

type IconBadgeProps = {
  icon: IconProps
  size?: 12 | 14
  className?: string
}

const SIZE_CLASSES = {
  12: 'size-12',
  14: 'size-14',
}

export function IconBadge({ icon, size = 14, className }: IconBadgeProps) {
  return (
    <div
      className={clsx(
        'border-brand-500 text-brand-500 grid place-items-center rounded-full border-2',
        SIZE_CLASSES[size],
        className,
      )}
    >
      <Icon {...icon} />
    </div>
  )
}
