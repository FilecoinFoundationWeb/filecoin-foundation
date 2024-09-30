'use client'

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'

import { TableBody } from '@/components/Table/TableBody'
import { TableHead } from '@/components/Table/TableHead'

import { AllocatorsTableColumns } from './AllocatorsTableColumns'

export type AllocatorProps = {
  name: string
  type: string
  region: string
  requiredReplicas: string
  requiredSps: string
  apply: string
}

type AllocatorsTableProps = {
  allocators: Array<AllocatorProps>
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
