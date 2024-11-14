'use client'

import {
  Listbox as HeadlessUIListbox,
  ListboxOptions as HeadlessUIListboxOptions,
} from '@headlessui/react'
import type { Column } from '@tanstack/react-table'

import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'

import type { AllocatorWithDatacap } from '../schemas/AllocatorSchema'

type FilterOption = {
  id: string
  name: string
}

type SelectFilterProps = {
  column: Column<AllocatorWithDatacap>
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
    <HeadlessUIListbox value={selectedOption} onChange={setColumnFilter}>
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

  function setColumnFilter(newOption: FilterOption) {
    newOption.id === DEFAULT_FILTER_ID
      ? resetFilter()
      : column.setFilterValue(newOption.id)
  }

  function resetFilter() {
    column.setFilterValue(undefined)
  }
}
