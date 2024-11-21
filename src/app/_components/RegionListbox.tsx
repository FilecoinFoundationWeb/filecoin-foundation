'use client'

import { Listbox } from '@headlessui/react'
import { FunnelSimple } from '@phosphor-icons/react'

import { type CategoryOption } from '@/types/categoryTypes'

import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

type RegionListboxProps = {
  selected: CategoryOption | undefined
  options: Array<CategoryOption>
  onChange: (selected: CategoryOption) => void
}

export function RegionListbox({
  selected,
  options,
  onChange,
}: RegionListboxProps) {
  return (
    <Listbox value={selected} onChange={onChange}>
      <ListboxButton
        text={selected?.name || 'Region'}
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
