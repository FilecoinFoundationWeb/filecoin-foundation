import { Button, type ButtonProps } from '@headlessui/react'

import { Icon as IconComponent, type IconProps } from './Icon'

export type FilterButtonProps = {
  Icon: IconProps['component']
  children: React.ReactNode
} & Omit<ButtonProps, 'className'>

export function FilterButton({ children, Icon, ...rest }: FilterButtonProps) {
  return (
    <Button className="listbox-button" {...rest}>
      <span className="flex items-center gap-2">
        <IconComponent component={Icon} size={20} />
        {children}
      </span>
    </Button>
  )
}
