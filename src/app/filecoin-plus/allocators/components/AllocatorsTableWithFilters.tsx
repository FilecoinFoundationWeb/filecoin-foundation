'use client'

import { useState } from 'react'

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  type ColumnFiltersState,
  type SortingState,
} from '@tanstack/react-table'

import { NoSearchResultsMessage } from '@/components/NoSearchResultsMessage'

import { allocatorsTableColumnsData } from '../data/allocatorsTableColumnsData'
import { type Allocator } from '../schemas/AllocatorSchema'
import { createOptionsFromData } from '../utils/createOptionsFromData'

import { AllocatorsTable } from './AllocatorsTable'
import { SearchFilter } from './SearchFilter'
import { SelectFilter } from './SelectFilter'

type AllocatorsTableWithFiltersProps = {
  data: Array<Allocator>
}

export function AllocatorsTableWithFilters({
  data,
}: AllocatorsTableWithFiltersProps) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const [sorting, setSorting] = useState<SortingState>([
    { id: 'name', desc: false },
  ])

  const table = useReactTable({
    data,
    columns: allocatorsTableColumnsData,
    state: { columnFilters, sorting },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })
  const { getRowModel, getHeaderGroups, getColumn } = table

  const rowModel = getRowModel()
  const headerGroups = getHeaderGroups()
  const hasSearchResults = Boolean(rowModel.rows.length)

  const nameColumn = getColumn('name')
  const locationColumn = getColumn('location')

  const locations = createOptionsFromData(data, 'location')

  return (
    <>
      <div className="mb-6 flex max-w-readable gap-4">
        {nameColumn && <SearchFilter column={nameColumn} />}
        {locationColumn && (
          <SelectFilter column={locationColumn} values={locations} />
        )}
      </div>

      {hasSearchResults ? (
        <AllocatorsTable headerGroups={headerGroups} rowModel={rowModel} />
      ) : (
        <div className="flex w-full justify-center">
          <NoSearchResultsMessage />
        </div>
      )}
    </>
  )
}
