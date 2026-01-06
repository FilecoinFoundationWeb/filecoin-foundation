'use client'

import {
  CaretCircleUpDownIcon,
  CaretCircleUpIcon,
  CaretCircleDownIcon,
} from '@phosphor-icons/react'
import {
  flexRender,
  type SortDirection,
  type Table as TableType,
} from '@tanstack/react-table'
import { clsx } from 'clsx'

import { Icon } from '../Icon'

import { Table } from './Table'

export type TanstackTableProps<TData> = {
  table: TableType<TData>
  striped?: boolean
  maxHeight?: `${number}px` | `${number}vh`
}

export function TanstackTable<TData>({
  table,
  striped = true,
  maxHeight,
}: TanstackTableProps<TData>) {
  const isScrollable = maxHeight != null

  const containerStyle = isScrollable
    ? { maxHeight, overflow: 'auto' as const }
    : undefined

  return (
    <Table containerStyle={containerStyle}>
      <Table.Header>
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              const canSort = header.column.getCanSort()
              const sortState = header.column.getIsSorted()
              const columnName = header.column.columnDef.header

              return (
                <Table.Head
                  key={header.id}
                  style={{
                    maxWidth: header.column.columnDef.maxSize,
                  }}
                  sticky={isScrollable}
                >
                  {canSort ? (
                    <button
                      onClick={header.column.getToggleSortingHandler()}
                      className={clsx(
                        'flex cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-1.5 pl-2.5 font-semibold',
                        'focus:brand-outline hover:bg-color-head-button-background focus:bg-color-head-button-background',
                        'aria-[sort=ascending]:bg-color-head-button-background aria-[sort=descending]:bg-color-head-button-background',
                      )}
                      aria-label={`Sort by ${columnName}`}
                      aria-sort={getAriaSort(sortState)}
                    >
                      <span>{flexRender(columnName, header.getContext())}</span>
                      <span
                        className={clsx(
                          'shrink-0',
                          sortState ? 'text-brand-700' : 'text-zinc-500/90',
                        )}
                      >
                        <Icon component={getSortIcon(sortState)} size={20} />
                      </span>
                    </button>
                  ) : (
                    flexRender(columnName, header.getContext())
                  )}
                </Table.Head>
              )
            })}
          </Table.Row>
        ))}
      </Table.Header>
      <Table.Body>
        {table.getRowModel().rows.map((row, index) => (
          <Table.Row
            key={row.id}
            className={clsx(
              striped && index % 2 === 0 && 'bg-(--color-table-row-striped)',
            )}
          >
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

function getSortIcon(sortState: SortDirection | false) {
  if (sortState === 'asc') return CaretCircleUpIcon
  if (sortState === 'desc') return CaretCircleDownIcon
  return CaretCircleUpDownIcon
}

function getAriaSort(sortState: SortDirection | false) {
  if (sortState === 'asc') return 'ascending'
  if (sortState === 'desc') return 'descending'
  return 'none'
}
