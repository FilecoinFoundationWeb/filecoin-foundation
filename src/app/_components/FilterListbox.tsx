'use client'

import { Listbox } from '@headlessui/react'
import { FunnelSimple } from '@phosphor-icons/react'

import {
  ListboxButton,
  type ListboxButtonProps,
} from '@/components/Listbox/ListboxButton'
import {
  ListboxOption,
  type OptionType,
} from '@/components/Listbox/ListboxOption'
import { ListboxOptions } from '@/components/Listbox/ListboxOptions'

type FilterListboxProps = {
  selected: OptionType
  options: Array<OptionType>
  onChange: (selected: OptionType) => void
  icon: ListboxButtonProps['leadingIcon']
}

export function FilterListbox({
  selected,
  options,
  onChange,
  icon,
}: FilterListboxProps) {
  return (
    <Listbox value={selected} onChange={onChange}>
      <ListboxButton text={selected.name} leadingIcon={icon} />
      <ListboxOptions>
        {options.map((option) => (
          <ListboxOption key={option.id} option={option} />
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
