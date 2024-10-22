import { Icon, type IconProps } from '@/components/Icon'

type IconButtonProps = {
  icon: IconProps['component']
  label: string
  onClick: React.ComponentPropsWithoutRef<'button'>['onClick']
}

export function IconButton({ icon, label, onClick }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className="grid size-12 place-items-center rounded-lg border border-brand-300 text-brand-300 focus:brand-outline"
      onClick={onClick}
    >
      <Icon size={20} component={icon} />
    </button>
  )
}
