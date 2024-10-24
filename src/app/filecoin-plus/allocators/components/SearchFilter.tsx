import type { Column } from '@tanstack/react-table'

import { SearchInput } from '@/components/SearchInput'

import type { Allocator } from '../schemas/AllocatorSchema'

export type NameFilterProps = {
  column: Column<Allocator>
}

export function SearchFilter({ column }: NameFilterProps) {
  const columnFilterValue = column.getFilterValue()?.toString() || ''

  return (
    <SearchInput query={columnFilterValue} onChange={column.setFilterValue} />
  )
}
