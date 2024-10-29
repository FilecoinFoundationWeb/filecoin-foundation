import type { Table } from '@tanstack/react-table'

import type { Allocator } from '../schemas/AllocatorSchema'
import { generateSortedOptions } from '../utils/generateSortedOptions'
import { getColumnOrThrow } from '../utils/getColumnOrThrow'

import { SearchFilter } from './SearchFilter'
import { SelectFilter } from './SelectFilter'

type AllocatorsTableFiltersProps = {
  table: Table<Allocator>
}

export function AllocatorsTableFilters({ table }: AllocatorsTableFiltersProps) {
  const allocatorsData = table.options.data

  const nameColumn = getColumnOrThrow(table, 'name')
  const locationColumn = getColumnOrThrow(table, 'location')
  const typeColumn = getColumnOrThrow(table, 'metapathway_type')

  const locationOptions = generateSortedOptions(allocatorsData, 'location')
  const typeOptions = generateSortedOptions(allocatorsData, 'metapathway_type')

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="w-full">
        <SearchFilter column={nameColumn} />
      </div>

      <div className="flex shrink-0 grow gap-4">
        <div className="w-1/2 sm:w-40 md:w-44 lg:w-56">
          <SelectFilter
            column={typeColumn}
            options={typeOptions}
            defaultOptionLabel="All Types"
          />
        </div>
        <div className="w-1/2 sm:w-40 md:w-44 lg:w-56">
          <SelectFilter
            column={locationColumn}
            options={locationOptions}
            defaultOptionLabel="All Regions"
          />
        </div>
      </div>
    </div>
  )
}
