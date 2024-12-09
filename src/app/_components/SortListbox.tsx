'use client'

import { Listbox } from '@headlessui/react'
import { ArrowsDownUp } from '@phosphor-icons/react/dist/ssr'

import { type SortOption } from '@/types/sortTypes'

import { ListboxButton } from '@/components/Listbox/ListboxButton'
import { ListboxOption } from '@/components/Listbox/ListboxOption'
import { ListboxOptions } from '@/components/Listbox/ListboxOptions'

type SortListboxProps = {
  selected: SortOption | undefined
  onChange: (newOption: SortOption) => void
  options: ReadonlyArray<SortOption>
}

export function SortListbox({ selected, onChange, options }: SortListboxProps) {
  const selectedOption = selected || options[0]

  return (
    <Listbox value={selectedOption} onChange={onChange}>
      <ListboxButton
        leadingIcon={ArrowsDownUp}
        text={selectedOption.name}
        compactBelow="md"
      />

      <ListboxOptions position="bottom end">
        {options.map((option) => (
          <ListboxOption key={option.id} option={option} />
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
