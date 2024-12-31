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

import { NAME_COLUMN_SORT_CONFIG } from '../constants/sorting'
import { allocatorsTableColumnsData } from '../data/allocatorsTableColumnsData'
import { type AllocatorWithDatacap } from '../schemas/AllocatorSchema'

import { AllocatorsTable } from './AllocatorsTable'
import { AllocatorsTableFilters } from './AllocatorsTableFilters'

type AllocatorsTableWithFiltersProps = {
  data: Array<AllocatorWithDatacap>
}

export function AllocatorsTableWithFilters({
  data,
}: AllocatorsTableWithFiltersProps) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([
    NAME_COLUMN_SORT_CONFIG.initialReactTableState,
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
  const { getRowModel, getHeaderGroups } = table

  const rowModel = getRowModel()
  const headerGroups = getHeaderGroups()

  const hasSearchResults = Boolean(rowModel.rows.length)

  return (
    <>
      <div className="sticky top-3 z-30 mb-6">
        <AllocatorsTableFilters table={table} />
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
