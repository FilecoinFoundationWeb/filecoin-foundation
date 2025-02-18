import { useMemo } from 'react'

import slugify from 'slugify'

import type { Object } from '@/types/utils'

type UseSearchProps<Entry extends Object> = {
  searchQuery: string | undefined
  entries: Array<Entry>
  searchBy: keyof Entry | Array<keyof Entry>
}

export function useSearch<Entry extends Object>({
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

function matchesQuery<Entry extends Object>(
  value: Entry[keyof Entry],
  query: string,
) {
  if (typeof value !== 'string' && typeof value !== 'number') {
    return false
  }

  const normalizedValue = normalizeString(String(value))
  const normalizedQuery = normalizeString(query)

  return normalizedValue.includes(normalizedQuery)
}

function normalizeString(str: string) {
  return slugify(str, {
    strict: true,
    trim: true,
    lower: true,
  })
}
