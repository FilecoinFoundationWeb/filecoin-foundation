import { useMemo } from 'react'

import { NextServerSearchParams } from '@/types/searchParams'

import { normalizeQueryParam } from '@/utils/queryUtils'

import { SEARCH_KEY } from '@/constants/searchParams'

type UseSearchProps<Entry extends Record<string, unknown>> = {
  searchParams: NextServerSearchParams
  entries: Entry[]
  searchBy: keyof Entry | Array<keyof Entry>
}

function search<Entry extends Record<string, unknown>>(
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

export function useSearch<Entry extends Record<string, unknown>>({
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
      return searchByKeys.some((key) => search(entry[key], normalizedQuery))
    })
  }, [entries, normalizedQuery, searchBy])

  return { searchQuery: normalizedQuery, searchResults }
}
