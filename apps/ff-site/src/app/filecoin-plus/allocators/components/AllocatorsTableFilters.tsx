import type { Table } from '@tanstack/react-table'

import { NAME_COLUMN_SORT_CONFIG } from '../constants/sorting'
import { MetapathwayTypeSchema } from '../schemas/AllocatorsSchema'
import type { AllocatorWithDatacap } from '../schemas/AllocatorWithDatacapSchema'
import { getColumnOrThrow } from '../utils/getColumnOrThrow'

import { SearchFilter } from './SearchFilter'
import { SelectFilter } from './SelectFilter'
import { SelectSort } from './SelectSort'

type AllocatorsTableFiltersProps = {
  table: Table<AllocatorWithDatacap>
}

const typeOptions = MetapathwayTypeSchema.options.map((value) => ({
  id: value,
  name: value,
}))

export function AllocatorsTableFilters({ table }: AllocatorsTableFiltersProps) {
  const nameColumn = getColumnOrThrow(table, 'name')
  const typeColumn = getColumnOrThrow(table, 'metapathway_type')

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="w-full">
        <SearchFilter column={nameColumn} />
      </div>

      <div className="flex shrink-0 grow gap-4">
        <div className="w-full sm:w-36">
          <SelectFilter
            column={typeColumn}
            options={typeOptions}
            defaultOptionLabel="All Types"
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
