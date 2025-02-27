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
      className="border-brand-300 text-brand-300 focus:brand-outline grid size-12 place-items-center rounded-lg border"
      onClick={onClick}
    >
      <Icon size={20} component={icon} />
    </Button>
  )
}
