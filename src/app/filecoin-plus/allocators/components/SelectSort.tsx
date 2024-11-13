'use client'

import {
  Listbox as HeadlessUIListbox,
} from '@headlessui/react'
import { ArrowsDownUp } from '@phosphor-icons/react/dist/ssr'
import type { Column, SortDirection } from '@tanstack/react-table'

import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

import type { Allocator } from '../schemas/AllocatorSchema'

export type TableSortOption = {
  id: SortDirection
  name: string
}

type SortFilterProps = {
  column: Column<Allocator>
  options: ReadonlyArray<TableSortOption>
  defaultOption: TableSortOption
}

export function SelectSort({
  column,
  options,
  defaultOption,
}: SortFilterProps) {
  const currentSortId = column.getIsSorted()

  const selectedOption =
    options.find((option) => option.id === currentSortId) || defaultOption

  return (
    <HeadlessUIListbox value={selectedOption.id} onChange={handleSortChange}>
      <ListboxButton
        leadingIcon={ArrowsDownUp}
        text={selectedOption.name}
        compactBelow="md"
      />
      <ListboxOptions position="right">
        {options.map((option) => (
          <ListboxOption key={option.id} option={option} />
        ))}
      </ListboxOptions>
    </HeadlessUIListbox>
  )

  function handleSortChange(selectedOptionId: TableSortOption['id']) {
    const isSortDesc = selectedOptionId === 'desc'
    column.toggleSorting(isSortDesc)
  }
}
