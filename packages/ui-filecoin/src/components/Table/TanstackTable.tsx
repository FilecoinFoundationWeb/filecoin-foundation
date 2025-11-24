'use client'

import { flexRender, type Table as TableType } from '@tanstack/react-table'

import { Table } from './Table'

export type TanstackTableProps<TData> = {
  table: TableType<TData>
}

export function TanstackTable<TData>({
  table,
}: TanstackTableProps<TData>) {

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
