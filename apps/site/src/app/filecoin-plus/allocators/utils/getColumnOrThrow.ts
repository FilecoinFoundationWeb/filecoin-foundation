import type { Table } from '@tanstack/react-table'

import type { AllocatorWithDatacap } from '../schemas/AllocatorSchema'

export function getColumnOrThrow(
  table: Table<AllocatorWithDatacap>,
  columnName: keyof AllocatorWithDatacap,
) {
  const column = table.getColumn(columnName)

  if (!column) {
    throw new Error(`Missing column ${columnName} in getColumnOrThrow`)
  }

  return column
}
