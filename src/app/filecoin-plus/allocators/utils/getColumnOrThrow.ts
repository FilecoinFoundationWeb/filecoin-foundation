import type { Table } from '@tanstack/react-table'

import type { Allocator } from '../schemas/AllocatorSchema'

export function getColumnOrThrow(
  table: Table<Allocator>,
  columnName: keyof Allocator,
) {
  const column = table.getColumn(columnName)

  if (!column) {
    throw new Error(`Missing column ${columnName} in getColumnOrThrow`)
  }

  return column
}
