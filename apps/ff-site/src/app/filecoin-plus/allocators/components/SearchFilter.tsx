import type { Column } from '@tanstack/react-table'

import { SearchInput } from '@filecoin-foundation/ui/SearchInput'

import type { AllocatorWithDatacap } from '../schemas/AllocatorWithDatacapSchema'

export type NameFilterProps = {
  column: Column<AllocatorWithDatacap>
}

export function SearchFilter({ column }: NameFilterProps) {
  const columnFilterValue = column.getFilterValue()?.toString() || ''

  return (
    <SearchInput query={columnFilterValue} onChange={column.setFilterValue} />
  )
}
