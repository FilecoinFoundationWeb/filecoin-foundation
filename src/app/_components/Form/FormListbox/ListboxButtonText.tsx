import { Icon } from '@/components/Icon'

import type { FormListboxProps } from './FormListbox'

type ButtonTextProps = Pick<FormListboxProps, 'value' | 'placeholder' | 'icon'>

export function ListboxButtonText({
  value,
  placeholder,
  icon,
}: ButtonTextProps) {
  return (
    <div className="flex w-full items-center gap-2">
      {icon && <Icon component={icon} />}
      <span className="truncate text-left">{value?.name || placeholder}</span>
    </div>
  )
}
