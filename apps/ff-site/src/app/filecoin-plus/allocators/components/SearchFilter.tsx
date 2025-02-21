import type { Column } from '@tanstack/react-table'

import { SearchInput } from '@/components/SearchInput'

import type { AllocatorWithDatacap } from '../schemas/AllocatorSchema'

export type NameFilterProps = {
  column: Column<AllocatorWithDatacap>
}

export function SearchFilter({ column }: NameFilterProps) {
  const columnFilterValue = column.getFilterValue()?.toString() || ''

  return (
    <SearchInput query={columnFilterValue} onChange={column.setFilterValue} />
  )
}
