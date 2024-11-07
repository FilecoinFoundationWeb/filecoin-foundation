'use client'

import {
  Listbox as HeadlessUIListbox,
  ListboxButton as HeadlessUIListboxButton,
  ListboxOptions as HeadlessUIListboxOptions,
} from '@headlessui/react'
import { ArrowsDownUp, CaretDown } from '@phosphor-icons/react/dist/ssr'
import type { Column, SortDirection } from '@tanstack/react-table'

import { Icon } from '@/components/Icon'
import { ListboxOption } from '@/components/ListboxOption'

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
    <HeadlessUIListbox
      value={selectedOption.id}
      onChange={(selectedOptionId: TableSortOption['id']) =>
        handleSortChange(selectedOptionId)
      }
    >
      <HeadlessUIListboxButton className="inline-flex w-full items-center justify-between gap-2 rounded-lg border border-brand-300 bg-brand-800 p-3 text-brand-300 focus:brand-outline hover:border-current hover:text-brand-400">
        <div className="inline-flex items-center gap-2">
          <Icon component={ArrowsDownUp} />
          <span className="hidden text-nowrap md:block">
            {selectedOption.name}
          </span>
        </div>
        <span className="hidden md:block">
          <Icon component={CaretDown} size={16} weight="bold" />
        </span>
      </HeadlessUIListboxButton>
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

  function handleSortChange(selectedOptionId: TableSortOption['id']) {
    const isSortDesc = selectedOptionId === 'desc'
    column.toggleSorting(isSortDesc)
  }
}
