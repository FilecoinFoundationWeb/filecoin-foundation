'use client'

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'

import { TableBody } from '@/components/Table/TableBody'
import { TableHead } from '@/components/Table/TableHead'

import { mapAllocatorsToTableData } from '../data/allocatorTable'

export type AllocatorProps = {
  name: string
  metapathway_type: string
  location: string
  required_replicas: string
  required_sps: string
}

type AllocatorsListProps = {
  allocators: Array<AllocatorProps>
}

export function AllocatorsList({ allocators }: AllocatorsListProps) {
  const table = useReactTable({
    data: allocators,
    columns: mapAllocatorsToTableData(),
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
