'use client'

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'

import { TableBody } from '@/components/Table/TableBody'
import { TableHead } from '@/components/Table/TableHead'

import { allocatorListData } from '../data/allocatorList'
import { allocatorTableData } from '../data/allocatorTable'

export function AllocatorsList() {
  const table = useReactTable({
    data: allocatorListData,
    columns: allocatorTableData,
    initialState: {
      sorting: [{ id: 'points', desc: true }],
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <TableHead headerGroups={table.getHeaderGroups()} />
        <TableBody rowModel={table.getRowModel()} />
      </table>
    </div>
  )
}
