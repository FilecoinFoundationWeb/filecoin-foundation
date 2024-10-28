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
import { createUniqueOptionsFromData } from '../utils/createUniqueOptionsFromData'

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
  const { getRowModel, getHeaderGroups, getColumn } = table

  const rowModel = getRowModel()
  const headerGroups = getHeaderGroups()
  const nameColumn = getColumn('name')
  const locationColumn = getColumn('location')
  const typeColumn = getColumn('metapathway_type')

  if (!nameColumn || !locationColumn || !typeColumn) {
    throw new Error('Missing table columns in AllocatorsTableWithFilters')
  }

  const locationOptions = createUniqueOptionsFromData(data, 'location')
  const typeOptions = createUniqueOptionsFromData(data, 'metapathway_type')

  const hasSearchResults = Boolean(rowModel.rows.length)

  return (
    <>
      <AllocatorsTableFiltersLayout
        nameSearch={nameColumn && <SearchFilter column={nameColumn} />}
        typeFilter={
          <SelectFilter
            column={typeColumn}
            options={typeOptions}
            resetOptionName="All Types"
          />
        }
        locationFilter={
          <SelectFilter
            column={locationColumn}
            options={locationOptions}
            resetOptionName="All Regions"
          />
        }
      />

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
