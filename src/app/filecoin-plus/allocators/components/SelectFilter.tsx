'use client'

import { Listbox as HeadlessUIListbox } from '@headlessui/react'
import type { Column } from '@tanstack/react-table'

import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

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
      <ListboxOptions>
        {allOptions.map((option) => (
          <ListboxOption key={option.id} option={option} />
        ))}
      </ListboxOptions>
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
