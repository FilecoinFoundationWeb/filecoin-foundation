'use client'

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from '@tanstack/react-table'

import { Table } from './Table'

export type TanstackTableProps<TData> = {
  data: Array<TData>
  columns: Array<ColumnDef<TData, any>>
}

export function TanstackTable<TData>({
  data,
  columns,
}: TanstackTableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Table>
      <Table.Header>
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Table.Head
                key={header.id}
                style={{ maxWidth: header.column.columnDef.maxSize }}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </Table.Head>
            ))}
          </Table.Row>
        ))}
      </Table.Header>
      <Table.Body>
        {table.getRowModel().rows.map((row) => (
          <Table.Row key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Table.Cell
                key={cell.id}
                style={{ maxWidth: cell.column.columnDef.maxSize }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
