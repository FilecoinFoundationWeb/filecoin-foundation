'use client'

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'

import { TableBody } from '@/components/Table/TableBody'
import { TableHead } from '@/components/Table/TableHead'

import { mapAllocatorsToTableData } from '../data/allocatorTable'

import { NoAllocatorsComponent } from './NoAllocatorsComponents'

export type AllocatorProps = {
  name: string
  type: string
  region: string
  required_replicas: string
  required_sps: string
  apply: string
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

  const noAllocators = allocators.length === 0

  if (noAllocators) {
    return <NoAllocatorsComponent />
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <TableHead headerGroups={table.getHeaderGroups()} />
        <TableBody rowModel={table.getRowModel()} />
      </table>
    </div>
  )
}
