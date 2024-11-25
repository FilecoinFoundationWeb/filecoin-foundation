'use client'

import { Listbox } from '@headlessui/react'
import { FunnelSimple } from '@phosphor-icons/react'

import { type CategoryOption } from '@/types/categoryTypes'

import { DEFAULT_CATEGORY } from '@/constants/categoryConstants'

import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

type CategoryListboxProps = {
  selected: CategoryOption
  options: Array<CategoryOption>
  onChange: (selected: CategoryOption) => void
}

export function CategoryListbox({
  selected,
  options,
  onChange,
}: CategoryListboxProps) {
  return (
    <Listbox value={selected} onChange={onChange}>
      <ListboxButton
        text={selected?.name || 'Category'}
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
