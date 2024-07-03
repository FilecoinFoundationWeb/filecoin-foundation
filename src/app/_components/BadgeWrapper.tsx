import type { IconProps } from '@/components/Icon'

type BadgeWrapperProps = {
  children: number | React.ReactElement<IconProps>
}

export function BadgeWrapper({ children }: BadgeWrapperProps) {
  return (
    <div className="grid size-11 place-items-center rounded-full bg-blue-500">
      {children}
    </div>
  )
}
