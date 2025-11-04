import { Button, type ButtonProps } from '@headlessui/react'

import { Icon, type IconProps } from './Icon'

type IconButtonProps = {
  icon: IconProps['component']
  label: string
  onClick: ButtonProps['onClick']
}

export function IconButton({ icon, label, onClick }: IconButtonProps) {
  return (
    <Button
      aria-label={label}
      className="icon-button focus:brand-outline grid size-12 cursor-pointer place-items-center"
      onClick={onClick}
    >
      <Icon component={icon} />
    </Button>
  )
}
