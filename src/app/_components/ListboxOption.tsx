import { ListboxOption as HeadlessUIListboxOption } from '@headlessui/react'
import { Check } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import { Icon } from '@/components/Icon'

export type OptionType = {
  id: string
  name: string
  count?: number
  disabled?: boolean
}

type ListboxOptionProps = {
  option: OptionType
}

export function ListboxOption({ option }: ListboxOptionProps) {
  return (
    <HeadlessUIListboxOption
      as="li"
      value={option.id}
      disabled={option.disabled}
      className={clsx(
        'group flex cursor-default items-center justify-between gap-12 px-5 py-2 ui-active:bg-brand-500',
        option.disabled && 'cursor-not-allowed',
      )}
    >
      <span>
        {option.name}
        {typeof option.count === 'number' && (
          <span className="ml-2 text-sm font-light">({option.count})</span>
        )}
      </span>

      <span className="invisible mb-px group-data-[selected]:visible">
        <Icon component={Check} size={20} />
      </span>
    </HeadlessUIListboxOption>
  )
}
