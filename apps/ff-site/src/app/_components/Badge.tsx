import { type IconProps, Icon } from '@/components/Icon'

export type BadgeProps = {
  icon?: IconProps['component']
  number?: number
}

export function Badge({ icon, number }: BadgeProps) {
  if (!icon && !number) {
    throw new Error('Badge component requires either an icon or a number')
  }

  return (
    <div className="grid size-11 place-items-center rounded-full bg-blue-500">
      {icon && <Icon component={icon} />}
      {number && <span className="text-2xl font-bold">{number}</span>}
    </div>
  )
}
