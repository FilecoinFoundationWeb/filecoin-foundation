import { useCallback, useMemo } from 'react'

import type { NextServerSearchParams } from '@/types/searchParams'
import type { Object } from '@/types/utils'

import { DEFAULT_FILTER_ID } from '@/constants/filterConstants'

type QueryValue = NextServerSearchParams[keyof NextServerSearchParams]

export type UseFilterProps<Entry extends Object, Query extends QueryValue> = {
  entries: Array<Entry>
  filterQuery: Query
  filterFn: (entry: Entry, filterQuery: Query) => boolean
}

export function useFilter<Entry extends Object, Query extends QueryValue>({
  entries,
  filterQuery,
  filterFn,
}: UseFilterProps<Entry, Query>) {
  const filterByQuery = useCallback(
    (entry: Entry) => filterFn(entry, filterQuery),
    [filterFn, filterQuery],
  )

  const filteredEntries = useMemo(() => {
    if (!filterQuery || filterQuery === DEFAULT_FILTER_ID) {
      return entries
    }

    return entries.filter(filterByQuery)
  }, [filterQuery, entries, filterByQuery])

  return { filteredEntries }
}
