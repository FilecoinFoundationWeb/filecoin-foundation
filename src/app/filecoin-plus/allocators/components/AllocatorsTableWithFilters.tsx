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

import { AllocatorsTable } from './AllocatorsTable'
import { NameSearchFilter } from './NameSearchFilter'

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

  return (
    <>
      <div className="mb-6 max-w-readable">
        {nameColumn && <NameSearchFilter column={nameColumn} />}
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
