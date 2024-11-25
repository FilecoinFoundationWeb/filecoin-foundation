'use client'

import { Listbox } from '@headlessui/react'
import { FunnelSimple } from '@phosphor-icons/react'

import { ListboxButton } from '@/components/ListboxButton'
import { type OptionType, ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

type LocationListboxProps = {
  selected: OptionType
  options: Array<OptionType>
  onChange: (selected: OptionType) => void
}

export function LocationListbox({
  selected,
  options,
  onChange,
}: LocationListboxProps) {
  console.log(options)
  return (
    <Listbox value={selected} onChange={onChange}>
      <ListboxButton
        text={selected?.name || 'Location'}
        leadingIcon={FunnelSimple}
      />
      <ListboxOptions>
        {options.map((option) => (
          <ListboxOption key={option.id} option={option} />
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
