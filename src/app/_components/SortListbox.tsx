'use client'

import {
  Listbox,
  ListboxOptions as HeadlessUIListboxOptions,
} from '@headlessui/react'
import { ArrowsDownUp, CaretDown, Check } from '@phosphor-icons/react/dist/ssr'

import { type SortOption, type ValidSortKey } from '@/types/sortTypes'

import { ListboxOptionText } from '@/components/Form/FormListbox/ListboxOptionText'
import { Icon } from '@/components/Icon'
import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
// import { ListboxOptions } from '@/components/ListboxOptions'

type SortListboxProps = {
  sortId: ValidSortKey
  onChange: (selectedOption: ValidSortKey) => void
  options: ReadonlyArray<SortOption>
}

export function SortListbox({ sortId, onChange, options }: SortListboxProps) {
  const selectedOption =
    options.find((option) => option.id === sortId) || options[0]

  return (
    <Listbox value={sortId} onChange={onChange}>
      <ListboxButton>
        <div className="inline-flex items-center gap-2">
          <Icon component={ArrowsDownUp} />
          <span className="hidden text-nowrap md:block">
            {selectedOption.name}
          </span>
        </div>
        <span className="hidden md:block">
          <Icon component={CaretDown} size={16} weight="bold" />
        </span>
      </ListboxButton>
      <HeadlessUIListboxOptions
        as="ul"
        anchor={{ to: 'bottom end', gap: 8 }}
        className="min-w-28 rounded-lg border border-brand-100 bg-brand-800 py-2 text-brand-100 focus:brand-outline focus-within:outline-2"
      >
        {options.map((option) => (
          <ListboxOption key={option.id} option={option} />
        ))}
      </HeadlessUIListboxOptions>
    </Listbox>
  )
}
