'use client'

import { ArrowsDownUpIcon } from '@phosphor-icons/react/dist/ssr'
import type { Column, SortDirection } from '@tanstack/react-table'

import { Listbox } from '@filecoin-foundation/ui/Listbox'
import { ListboxButton } from '@filecoin-foundation/ui/Listbox/ListboxButton'
import { ListboxOption } from '@filecoin-foundation/ui/Listbox/ListboxOption'
import { ListboxOptions } from '@filecoin-foundation/ui/Listbox/ListboxOptions'

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
    <Listbox value={selectedOption} onChange={setColumnSort}>
      <ListboxButton
        leadingIcon={ArrowsDownUpIcon}
        text={selectedOption.name}
        compactBelow="md"
      />
      <ListboxOptions position="bottom end">
        {options.map((option) => (
          <ListboxOption key={option.id} option={option} />
        ))}
      </ListboxOptions>
    </Listbox>
  )

  function setColumnSort(newOption: TableSortOption) {
    const isSortDesc = newOption.id === 'desc'
    column.toggleSorting(isSortDesc)
  }
}
