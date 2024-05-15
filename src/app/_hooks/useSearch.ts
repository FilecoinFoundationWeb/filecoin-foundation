import { useMemo } from 'react'

import { NextServerSearchParams } from '@/types/searchParams'

import { SEARCH_KEY } from '@/constants/searchParams'

type UseSearchProps<Entry extends Record<string, unknown>> = {
  searchParams: NextServerSearchParams
  entries: Entry[]
  searchBy: keyof Entry | Array<keyof Entry>
}

function validateSearchQuery(searchQuery: NextServerSearchParams['search']) {
  if (!searchQuery) {
    return ''
  }

  const rawQuery = Array.isArray(searchQuery) ? searchQuery[0] : searchQuery
  return rawQuery.toLowerCase()
}

export function useSearch<Entry extends Record<string, unknown>>({
  searchParams,
  entries,
  searchBy,
}: UseSearchProps<Entry>) {
  const rawQuery = searchParams[SEARCH_KEY]
  const cleanQuery = validateSearchQuery(rawQuery)

  const searchResults = useMemo(() => {
    const searchByKeys = Array.isArray(searchBy) ? searchBy : [searchBy]

    return entries.filter((entry) => {
      return searchByKeys.some((key) => {
        const value = entry[key]

        const isStringValue = typeof value === 'string'
        const isNumberValue = typeof value === 'number'

        if (isStringValue) {
          return value.toLowerCase().includes(cleanQuery)
        }

        if (isNumberValue) {
          return value.toString().toLowerCase().includes(cleanQuery)
        }

        return false
      })
    })
  }, [entries, cleanQuery, searchBy])

  return { searchQuery: cleanQuery, searchResults }
}
