import type { Table } from '@tanstack/react-table'

import { NAME_COLUMN_SORT_CONFIG } from '../constants/sorting'
import type { AllocatorWithDatacap } from '../schemas/AllocatorSchema'
import { generateSortedOptions } from '../utils/generateSortedOptions'
import { getColumnOrThrow } from '../utils/getColumnOrThrow'

import { SearchFilter } from './SearchFilter'
import { SelectFilter } from './SelectFilter'
import { SelectSort } from './SelectSort'

type AllocatorsTableFiltersProps = {
  table: Table<AllocatorWithDatacap>
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
        <div className="w-1/2 sm:w-36">
          <SelectFilter
            column={typeColumn}
            options={typeOptions}
            defaultOptionLabel="All Types"
          />
        </div>
        <div className="w-1/2 sm:w-36">
          <SelectFilter
            column={locationColumn}
            options={locationOptions}
            defaultOptionLabel="All Regions"
          />
        </div>
        <div className="shrink md:min-w-60">
          <SelectSort
            column={nameColumn}
            options={NAME_COLUMN_SORT_CONFIG.options}
            defaultOption={NAME_COLUMN_SORT_CONFIG.defaultOption}
          />
        </div>
      </div>
    </div>
  )
}
