'use client'

import type { Column } from '@tanstack/react-table'

import { Listbox } from '@filecoin-foundation/ui/Listbox'
import { ListboxButton } from '@filecoin-foundation/ui/Listbox/ListboxButton'
import { ListboxOption } from '@filecoin-foundation/ui/Listbox/ListboxOption'
import { ListboxOptions } from '@filecoin-foundation/ui/Listbox/ListboxOptions'

import type { AllocatorWithDatacap } from '../schemas/AllocatorWithDatacapSchema'

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

  const sortedOptions = options.toSorted((a, b) => a.name.localeCompare(b.name))

  const allOptions = [defaultOption, ...sortedOptions]

  const selectedOption =
    allOptions.find((option) => option.id === currentFilterId) || defaultOption

  return (
    <Listbox value={selectedOption} onChange={setColumnFilter}>
      <ListboxButton text={selectedOption.name} />
      <ListboxOptions>
        {allOptions.map((option) => (
          <ListboxOption key={option.id} option={option} />
        ))}
      </ListboxOptions>
    </Listbox>
  )

  function setColumnFilter(newOption: FilterOption) {
    if (newOption.id === DEFAULT_FILTER_ID) {
      resetFilter()
    } else {
      column.setFilterValue(newOption.id)
    }
  }

  function resetFilter() {
    column.setFilterValue(undefined)
  }
}
