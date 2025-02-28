import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'
import { Button, type ButtonProps } from '@headlessui/react'

type IconButtonProps = {
  icon: IconProps['component']
  label: string
  onClick: ButtonProps['onClick']
}

export function IconButton({ icon, label, onClick }: IconButtonProps) {
  return (
    <Button
      aria-label={label}
      className="icon-button focus:brand-outline grid size-12 place-items-center border"
      onClick={onClick}
    >
      <Icon component={icon} />
    </Button>
  )
}
