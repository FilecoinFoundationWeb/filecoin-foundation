'use client'

import { CloudSlash } from '@phosphor-icons/react/dist/ssr'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'

import { FIL_PLUS_URLS } from '@/constants/siteMetadata'

import { Button } from '@/components/Button'
import { NoResultsMessage } from '@/components/NoResultsMessage'
import { TableBody } from '@/components/Table/TableBody'
import { TableHead } from '@/components/Table/TableHead'

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
    return (
      <NoResultsMessage title="Allocator Data Unavailable" icon={CloudSlash}>
        <p className="max-w-md text-center">
          We’re having trouble fetching the allocator data. For the latest
          information, please check the Allocators list on the Filecoin Plus
          Registry.
        </p>
        <Button href={FIL_PLUS_URLS.allocators.site} variant="primary">
          Go To FIlecoin Plus Registry
        </Button>
      </NoResultsMessage>
    )
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
