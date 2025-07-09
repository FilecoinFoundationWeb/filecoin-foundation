'use client'

import { CheckIcon, XIcon } from '@phosphor-icons/react'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table'
import { clsx } from 'clsx'

import {
  filecoinVsCloudComparison,
  type ComparisonRow,
} from '../data/filecoinVsCloudComparison'
import { IconBadge } from '@/_components/IconBadge'

type ComparisonCell = boolean | 'limited'

const columnHelper = createColumnHelper<ComparisonRow>()

const columns = [
  columnHelper.accessor('feature', {
    header: '',
    cell: (info) => info.getValue(),
    meta: { align: 'left' },
  }),
  columnHelper.accessor('filecoin', {
    header: 'Filecoin',
    cell: ({ getValue }) => renderCell(getValue()),
    meta: { align: 'center' },
  }),
  columnHelper.accessor('traditionalCloud', {
    header: 'Traditional Cloud',
    cell: ({ getValue }) => renderCell(getValue()),
    meta: { align: 'center' },
  }),
]

export function ComparisonTable() {
  const table = useReactTable({
    data: filecoinVsCloudComparison,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <table className="w-full border-collapse">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              const { meta } = header.column.columnDef
              return (
                <th
                  key={header.id}
                  className={clsx(
                    'border-b-1 border-zinc-600 py-20 text-2xl font-medium',
                    meta?.align === 'center' && 'text-center',
                    meta?.align === 'right' && 'text-right',
                  )}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              )
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => {
              const { meta } = cell.column.columnDef
              return (
                <td
                  key={cell.id}
                  className={clsx(
                    'border-b-1 border-zinc-600 py-8 text-2xl',
                    meta?.align === 'center' && 'text-center',
                    meta?.align === 'right' && 'text-right',
                  )}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function renderCell(value: ComparisonCell) {
  if (value === true)
    return (
      <div className="flex h-full items-center justify-center">
        <IconBadge icon={CheckIcon} size="sm" />
      </div>
    )
  if (value === false)
    return (
      <div className="flex h-full items-center justify-center">
        <IconBadge icon={XIcon} size="sm" />
      </div>
    )
  return (
    <span className="block text-center text-xl text-zinc-400">Limited</span>
  )
}
