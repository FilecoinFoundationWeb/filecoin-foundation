import { BadgeWrapper } from '@/components/BadgeWrapper'
import { type IconProps, Icon } from '@/components/Icon'

export type IconBadgeProps = {
  icon: IconProps['component']
}

export function IconBadge({ icon }: IconBadgeProps) {
  return (
    <BadgeWrapper>
      <Icon component={icon} />
    </BadgeWrapper>
  )
}
