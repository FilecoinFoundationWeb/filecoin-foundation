import { useMemo } from 'react'

import slugify from 'slugify'

import type { NextServerSearchParams } from '@/types/searchParams'
import type { Object } from '@/types/utils'

import { SEARCH_KEY } from '@/constants/searchParams'

import { normalizeQueryParam } from '@/utils/queryUtils'

type UseSearchProps<Entry extends Object> = {
  searchParams: NextServerSearchParams
  entries: Array<Entry>
  searchBy: keyof Entry | Array<keyof Entry>
}

function normalizeString(str: string) {
  return slugify(str, {
    strict: true,
    trim: true,
    lower: true,
  })
}

function matchesQuery<Entry extends Object>(
  value: Entry[keyof Entry],
  query: string,
): boolean {
  if (typeof value !== 'string' && typeof value !== 'number') {
    return false
  }

  const normalizedValue = normalizeString(String(value))
  const normalizedQuery = normalizeString(query)

  return normalizedValue.includes(normalizedQuery)
}

export function useSearch<Entry extends Object>({
  searchParams,
  entries,
  searchBy,
}: UseSearchProps<Entry>) {
  const normalizedQuery = normalizeQueryParam(searchParams, SEARCH_KEY)

  const searchResults = useMemo(() => {
    if (!normalizedQuery) {
      return entries
    }

    const searchByKeys = Array.isArray(searchBy) ? searchBy : [searchBy]

    return entries.filter((entry) => {
      return searchByKeys.some((key) =>
        matchesQuery(entry[key], normalizedQuery),
      )
    })
  }, [entries, normalizedQuery, searchBy])

  return { searchQuery: normalizedQuery, searchResults }
}
