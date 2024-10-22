'use client'

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table'

import { SearchInput } from '@/components/SearchInput'

import { allocatorsTableColumnDef } from '../data/allocatorsTableColumnDef'
import { type Allocator } from '../schemas/AllocatorSchema'

import { AllocatorsTable } from './AllocatorsTable'
import { NoFilterResults } from './NoFilterResults'

type FilterableAllocatorsTableProps = {
  data: Array<Allocator>
}

export function FilterableAllocatorsTable({
  data,
}: FilterableAllocatorsTableProps) {
  const table = useReactTable({
    data,
    columns: allocatorsTableColumnDef,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      sorting: [{ id: 'name', desc: false }],
    },
    globalFilterFn: 'includesString',
  })
  const { getState, setGlobalFilter, getRowModel, getHeaderGroups } = table

  const searchQuery = getState().globalFilter || ''

  const rowModel = getRowModel()
  const headerGroups = getHeaderGroups()

  const hasSearchResults = Boolean(rowModel.rows.length)

  return (
    <>
      <div className="mb-6 max-w-readable">
        <SearchInput query={searchQuery} onChange={setGlobalFilter} />
      </div>

      {hasSearchResults ? (
        <AllocatorsTable headerGroups={headerGroups} rowModel={rowModel} />
      ) : (
        <NoFilterResults />
      )}
    </>
  )
}
