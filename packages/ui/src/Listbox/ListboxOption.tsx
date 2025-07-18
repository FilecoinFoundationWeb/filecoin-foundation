import { type ElementType } from 'react'

import { ListboxOption as HeadlessUIListboxOption } from '@headlessui/react'
import { CheckIcon } from '@phosphor-icons/react'

import { Icon } from '@filecoin-foundation/ui/Icon'

export type OptionType = {
  id: string
  name: string
  count?: number
  disabled?: boolean
}

type ListboxOptionProps<Value extends OptionType> = {
  option: Value
  as?: ElementType
}

export function ListboxOption<Value extends OptionType>({
  option,
  as = 'li',
}: ListboxOptionProps<Value>) {
  return (
    <HeadlessUIListboxOption
      as={as}
      value={option}
      disabled={option.disabled}
      className="listbox-option ui-disabled:cursor-not-allowed group flex cursor-default items-center justify-between gap-12 px-5 py-2"
    >
      <span>
        {option.name}
        {typeof option.count === 'number' && (
          <span className="ml-2 text-sm font-light">({option.count})</span>
        )}
      </span>

      <span className="invisible mb-px group-data-selected:visible">
        <Icon component={CheckIcon} size={20} />
      </span>
    </HeadlessUIListboxOption>
  )
}
