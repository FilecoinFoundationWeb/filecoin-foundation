'use client'

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'

import { TableBody } from '@/components/Table/TableBody'
import { TableHead } from '@/components/Table/TableHead'

import type { Allocator } from '../schema/AllocatorsSchema'

import { AllocatorsTableColumns } from './AllocatorsTableColumns'

type AllocatorsTableProps = {
  allocators: Array<Allocator>
}

export function AllocatorsTable({ allocators }: AllocatorsTableProps) {
  const table = useReactTable({
    data: allocators,
    columns: AllocatorsTableColumns(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      sorting: [{ id: 'name', desc: false }],
    },
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
