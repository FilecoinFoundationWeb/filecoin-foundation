'use client'

import { Listbox } from '@headlessui/react'
import { ArrowsDownUp } from '@phosphor-icons/react/dist/ssr'

import { type SortOption, type ValidSortKey } from '@/types/sortTypes'

import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

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
      <ListboxButton leadingIcon={ArrowsDownUp} text={selectedOption.name} />

      <ListboxOptions position="right">
        {options.map((option) => (
          <ListboxOption key={option.id} option={option} />
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
