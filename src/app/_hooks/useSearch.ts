import { useMemo } from 'react'

import { type NextServerSearchParams } from '@/types/searchParams'
import { type Object } from '@/types/utils'

import { normalizeQueryParam } from '@/utils/queryUtils'

import { SEARCH_KEY } from '@/constants/searchParams'

type UseSearchProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Entry[]
  searchBy: keyof Entry | keyof Entry[]
}

function matchesQuery<Entry extends Object>(
  value: Entry[keyof Entry],
  query: string,
): boolean {
  const isStringValue = typeof value === 'string'
  const isNumberValue = typeof value === 'number'

  if (isStringValue) {
    return value.toLowerCase().includes(query)
  }

  if (isNumberValue) {
    return value.toString().toLowerCase().includes(query)
  }

  return false
}

export function useSearch<Entry extends Object>({
  searchParams,
  entries,
  searchBy,
}: UseSearchProps<Entry>) {
  const normalizedQuery = normalizeQueryParam(searchParams, SEARCH_KEY)

  const searchResults = useMemo(() => {
    const searchByKeys = Array.isArray(searchBy) ? searchBy : [searchBy]

    if (!normalizedQuery) {
      return entries
    }

    return entries.filter((entry) => {
      return searchByKeys.some((key) =>
        matchesQuery(entry[key], normalizedQuery),
      )
    })
  }, [entries, normalizedQuery, searchBy])

  return { searchQuery: normalizedQuery, searchResults }
}
