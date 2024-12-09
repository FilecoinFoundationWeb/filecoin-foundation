'use client'

import { Listbox } from '@headlessui/react'
import { FunnelSimple } from '@phosphor-icons/react'

import { ListboxButton } from '@/components/Listbox/ListboxButton'
import {
  ListboxOption,
  type OptionType,
} from '@/components/Listbox/ListboxOption'
import { ListboxOptions } from '@/components/Listbox/ListboxOptions'

type FilterListboxProps = {
  selected: OptionType
  options: Array<OptionType>
  onChange: (selected: OptionType) => void
}

export function FilterListbox({
  selected,
  options,
  onChange,
}: FilterListboxProps) {
  return (
    <Listbox value={selected} onChange={onChange}>
      <ListboxButton text={selected.name} leadingIcon={FunnelSimple} />
      <ListboxOptions>
        {options.map((option) => (
          <ListboxOption key={option.id} option={option} />
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
