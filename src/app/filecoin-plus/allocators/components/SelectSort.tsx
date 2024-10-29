'use client'

import {
  Listbox as HeadlessUIListbox,
  ListboxButton as HeadlessUIListboxButton,
  ListboxOptions as HeadlessUIListboxOptions,
  ListboxOption as HeadlessUIListboxOption,
} from '@headlessui/react'
import { ArrowsDownUp, CaretDown, Check } from '@phosphor-icons/react/dist/ssr'
import type { Column } from '@tanstack/react-table'

import { Icon } from '@/components/Icon'

import type { Allocator } from '../schemas/AllocatorSchema'
import type { TableSortOption } from '../types'

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
    <HeadlessUIListbox value={selectedOption} onChange={handleSortChange}>
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
        className="rounded-lg border border-brand-100 bg-brand-800 py-2 text-brand-100 focus:brand-outline focus-within:outline-2"
      >
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
      </HeadlessUIListboxOptions>
    </HeadlessUIListbox>
  )

  function handleSortChange(newOption: TableSortOption) {
    if (newOption.id !== currentSortId) {
      column.toggleSorting()
    }
  }
}
