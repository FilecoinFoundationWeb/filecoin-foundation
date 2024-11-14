'use client'

import {
  Listbox as HeadlessUIListbox,
  ListboxOption as HeadlessUIListboxOption,
} from '@headlessui/react'
import { ArrowsDownUp, Check } from '@phosphor-icons/react/dist/ssr'
import type { Column, SortDirection } from '@tanstack/react-table'

import { Icon } from '@/components/Icon'
import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOptions } from '@/components/ListboxOptions'

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

  function handleSortChange(newOption: TableSortOption) {
    const isSortDesc = newOption.id === 'desc'
    column.toggleSorting(isSortDesc)
  }

  return (
    <HeadlessUIListbox value={selectedOption} onChange={handleSortChange}>
      <ListboxButton
        leadingIcon={ArrowsDownUp}
        text={selectedOption.name}
        compactBelow="md"
      />
      <ListboxOptions anchor={{ to: 'bottom end', gap: 12 }}>
        {options.map((option) => (
          <HeadlessUIListboxOption
            key={option.id}
            as="li"
            value={option}
            className="group flex cursor-default items-center justify-between gap-12 text-nowrap bg-transparent px-5 py-2 data-[focus]:bg-brand-500"
          >
            <span>{option.name}</span>
            <span className="invisible mb-px group-data-[selected]:visible">
              <Icon component={Check} size={20} />
            </span>
          </HeadlessUIListboxOption>
        ))}
      </ListboxOptions>
    </HeadlessUIListbox>
  )
}
