import { useCallback, useMemo } from 'react'

import type { QueryParamValue } from '@filecoin-foundation/utils/types/urlTypes'

import type { AnyObject } from '@filecoin-foundation/utils/types/utilTypes'
import { DEFAULT_FILTER_ID } from './filterConstants'

export type UseFilterProps<
  Entry extends AnyObject,
  Query extends QueryParamValue,
> = {
  entries: Array<Entry>
  filterQuery: Query
  filterFn: (entry: Entry, filterQuery: Query) => boolean
}

export function useFilter<
  Entry extends AnyObject,
  Query extends QueryParamValue,
>({ entries, filterQuery, filterFn }: UseFilterProps<Entry, Query>) {
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
