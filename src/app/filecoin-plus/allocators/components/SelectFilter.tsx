'use client'

import { Listbox } from '@headlessui/react'
import { CaretDown, List } from '@phosphor-icons/react/dist/ssr'
import type { Column } from '@tanstack/react-table'
import slugify from 'slugify'

import { Icon } from '@/components/Icon'
import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

import type { Allocator } from '../schemas/AllocatorSchema'

type SortListboxProps = {
  column: Column<Allocator>
  values: ReadonlyArray<string>
}

// const emptySortOption: SortOption = { id: '', name: '' }

export function SelectFilter({ column, values }: SortListboxProps) {
  const currentFilterValue = column.getFilterValue()?.toString()

  const options = values.map((value) => ({
    id: slugify(value, { lower: true }),
    name: value,
  }))

  return (
    <Listbox value={currentFilterValue} onChange={column.setFilterValue}>
      <ListboxButton>
        <span>{currentFilterValue || 'All Region'}</span>
        <Icon component={CaretDown} size={16} weight="bold" />
      </ListboxButton>
      <ListboxOptions>
        <ListboxOption key="empty" option={{ id: '', name: 'All Region' }} />
        {options.map((option) => (
          <ListboxOption key={option.id} option={option} />
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
