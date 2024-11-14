'use client'

import { Listbox } from '@headlessui/react'
import { ArrowsDownUp } from '@phosphor-icons/react/dist/ssr'

import { type SortOption } from '@/types/sortTypes'

import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

type SortListboxProps = {
  selected: SortOption | undefined
  onChange: (newOption: SortOption) => void
  options: ReadonlyArray<SortOption>
}

export function SortListbox({ selected, onChange, options }: SortListboxProps) {
  const selectedOption = selected || options[0]

  return (
    <Listbox value={selectedOption} onChange={onChange}>
      <ListboxButton leadingIcon={ArrowsDownUp} text={selectedOption.name} />

      <ListboxOptions position="right">
        {options.map((option) => (
          <ListboxOption key={option.id} option={option} />
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
