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
import { generateSortedOptions } from '../utils/generateSortedOptions'
import { getColumnOrThrow } from '../utils/getColumnOrThrow'

import { AllocatorsTable } from './AllocatorsTable'
import { AllocatorsTableFiltersLayout } from './AllocatorsTableFiltersLayout'
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
  const { getRowModel, getHeaderGroups } = table

  const rowModel = getRowModel()
  const headerGroups = getHeaderGroups()

  const nameColumn = getColumnOrThrow(table, 'name')
  const locationColumn = getColumnOrThrow(table, 'location')
  const typeColumn = getColumnOrThrow(table, 'metapathway_type')

  const locationOptions = generateSortedOptions(data, 'location')
  const typeOptions = generateSortedOptions(data, 'metapathway_type')

  const hasSearchResults = Boolean(rowModel.rows.length)

  return (
    <>
      <div className="mb-6">
        <AllocatorsTableFiltersLayout
          nameSearch={<SearchFilter column={nameColumn} />}
          typeFilter={
            <SelectFilter
              column={typeColumn}
              options={typeOptions}
              defaultOptionLabel="All Types"
            />
          }
          locationFilter={
            <SelectFilter
              column={locationColumn}
              options={locationOptions}
              defaultOptionLabel="All Regions"
            />
          }
        />
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
