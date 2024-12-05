import { useCallback, useMemo } from 'react'

import { type NextServerSearchParams } from '@/types/searchParams'
import { type Object } from '@/types/utils'

import { ALL_FILTERS_ID } from '@/constants/filterConstants'

import { normalizeQueryParam } from '@/utils/queryUtils'

export type UseFilterProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Array<Entry>
  filterKey: string
  filterFn: (entry: Entry, query?: string) => boolean
}

export function useFilter<Entry extends Object>({
  searchParams,
  entries,
  filterKey,
  filterFn,
}: UseFilterProps<Entry>) {
  const filterQuery = normalizeQueryParam(searchParams, filterKey)

  const filterByQuery = useCallback(
    (entry: Entry) => filterFn(entry, filterQuery),
    [filterFn, filterQuery],
  )

  const filteredEntries = useMemo(() => {
    if (!filterQuery || filterQuery === ALL_FILTERS_ID) {
      return entries
    }

    return entries.filter(filterByQuery)
  }, [filterQuery, entries, filterByQuery])

  return { filteredEntries }
}
