import { useMemo } from 'react'

import type { AnyObject } from '@filecoin-foundation/utils/types/utilTypes'
import type { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'

import { matchesQuery } from './utils/matchQuery'

type UseSearchProps<Entry extends AnyObject> = {
  searchQuery: ReturnType<typeof normalizeQueryParam>
  entries: Array<Entry>
  searchBy: keyof Entry | Array<keyof Entry>
}

export function useSearch<Entry extends AnyObject>({
  searchQuery,
  entries,
  searchBy,
}: UseSearchProps<Entry>) {
  const searchResults = useMemo(() => {
    if (!searchQuery) {
      return entries
    }

    const searchByKeys = Array.isArray(searchBy) ? searchBy : [searchBy]

    return entries.filter((entry) => {
      return searchByKeys.some((key) => matchesQuery(entry[key], searchQuery))
    })
  }, [entries, searchQuery, searchBy])

  return { searchQuery, searchResults }
}
