import { ListboxOption as HeadlessUIListboxOption } from '@headlessui/react'
import { Check } from '@phosphor-icons/react'

import { ListboxOptionText } from '@/components/Form/FormListbox/ListboxOptionText'
import { Icon } from '@/components/Icon'

type OptionType = {
  id: string
  name: string
  count?: number
}

type ListboxOptionProps = {
  option: OptionType
  disabled?: boolean
}

export function ListboxOption({ option, disabled }: ListboxOptionProps) {
  return (
    <HeadlessUIListboxOption
      as="li"
      value={option.id}
      disabled={disabled}
      className="group flex cursor-default items-center justify-between gap-12 px-5 py-2 ui-active:bg-brand-500"
    >
      <ListboxOptionText option={option} />
      <span className="invisible mb-px group-data-[selected]:visible">
        <Icon component={Check} size={20} />
      </span>
    </HeadlessUIListboxOption>
  )
}
