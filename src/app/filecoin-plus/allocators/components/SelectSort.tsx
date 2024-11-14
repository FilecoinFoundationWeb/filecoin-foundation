'use client'

import {
  Listbox as HeadlessUIListbox,
  ListboxOptions as HeadlessUIListboxOptions,
} from '@headlessui/react'
import { ArrowsDownUp } from '@phosphor-icons/react/dist/ssr'
import type { Column, SortDirection } from '@tanstack/react-table'

import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'

import type { AllocatorWithDatacap } from '../schemas/AllocatorSchema'

export type TableSortOption = {
  id: SortDirection
  name: string
}

type SortFilterProps = {
  column: Column<AllocatorWithDatacap>
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
    <HeadlessUIListbox value={selectedOption} onChange={setColumnSort}>
      <ListboxButton
        leadingIcon={ArrowsDownUp}
        text={selectedOption.name}
        compactBelow="md"
      />
      <HeadlessUIListboxOptions
        as="ul"
        anchor={{ to: 'bottom end', gap: 12 }}
        className="min-w-60 rounded-lg border border-brand-100 bg-brand-800 py-2 text-brand-100 focus:brand-outline focus-within:outline-2"
      >
        {options.map((option) => (
          <ListboxOption key={option.id} option={option} />
        ))}
      </HeadlessUIListboxOptions>
    </HeadlessUIListbox>
  )

  function setColumnSort(newOption: TableSortOption) {
    const isSortDesc = newOption.id === 'desc'
    column.toggleSorting(isSortDesc)
  }
}
