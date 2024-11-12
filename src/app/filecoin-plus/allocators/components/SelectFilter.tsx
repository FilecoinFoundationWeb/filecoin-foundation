'use client'

import {
  Listbox as HeadlessUIListbox,
  ListboxOptions as HeadlessUIListboxOptions,
} from '@headlessui/react'
import type { Column } from '@tanstack/react-table'

import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'

import type { Allocator } from '../schemas/AllocatorSchema'

type FilterOption = {
  id: string
  name: string
}

type SelectFilterProps = {
  column: Column<Allocator>
  options: ReadonlyArray<FilterOption>
  defaultOptionLabel: string
}

const DEFAULT_FILTER_ID = ''

export function SelectFilter({
  column,
  options,
  defaultOptionLabel,
}: SelectFilterProps) {
  const currentFilterId = column.getFilterValue()

  const defaultOption = {
    id: DEFAULT_FILTER_ID,
    name: defaultOptionLabel,
  } as const

  const allOptions = [defaultOption, ...options]

  const selectedOption =
    allOptions.find((option) => option.id === currentFilterId) || defaultOption

  return (
    <HeadlessUIListbox
      value={currentFilterId ?? DEFAULT_FILTER_ID}
      onChange={handleOptionChange}
    >
      <ListboxButton text={selectedOption.name} />

      <HeadlessUIListboxOptions
        as="ul"
        anchor={{ to: 'bottom start', gap: 12 }}
        className="rounded-lg border border-brand-100 bg-brand-800 py-2 text-brand-100 focus:brand-outline focus-within:outline-2"
      >
        {allOptions.map((option) => (
          <ListboxOption key={option.id} option={option} />
        ))}
      </HeadlessUIListboxOptions>
    </HeadlessUIListbox>
  )

  function handleOptionChange(selectedOptionId: FilterOption['id']) {
    selectedOptionId === DEFAULT_FILTER_ID
      ? resetFilter()
      : column.setFilterValue(selectedOptionId)
  }

  function resetFilter() {
    column.setFilterValue(undefined)
  }
}
