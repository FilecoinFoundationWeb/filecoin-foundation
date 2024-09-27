'use client'

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'

import { TableBody } from '@/components/Table/TableBody'
import { TableHead } from '@/components/Table/TableHead'

import { FILECOIN_FOUNDATION_URLS } from '@/_constants/siteMetadata'

import { mapAllocatorsToTableData } from '../data/allocatorTable'

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
    return <NoAllocatorsMessage />
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

function NoAllocatorsMessage() {
  return (
    <div className="mx-auto max-w-readable text-center">
      <p className="mb-4">No allocators are currently available.</p>
      <p>
        For the most up-to-date information on Filecoin Plus allocators, please
        visit the{' '}
        <a
          href={FILECOIN_FOUNDATION_URLS.allocators.externalSite}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          official Filecoin Plus website
        </a>
        .
      </p>
    </div>
  )
}
