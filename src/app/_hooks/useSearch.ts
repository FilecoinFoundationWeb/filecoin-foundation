import { useMemo } from 'react'

import { NextServerSearchParams } from '@/types/searchParams'
import { SearchableByTitle } from '@/types/searchTypes'

import { SEARCH_KEY } from '@/constants/searchParams'

function validateSearchQuery(searchQuery: NextServerSearchParams['search']) {
  if (!searchQuery) {
    return ''
  }

  const rawQuery = Array.isArray(searchQuery) ? searchQuery[0] : searchQuery
  return rawQuery.toLowerCase()
}

type UseSearchProps<Item extends SearchableByTitle> = {
  searchParams: NextServerSearchParams
  data: Item[]
}

export function useSearch<Item extends SearchableByTitle>({
  searchParams,
  data,
}: UseSearchProps<Item>) {
  const rawQuery = searchParams[SEARCH_KEY]
  const cleanQuery = validateSearchQuery(rawQuery)

  const searchResults = useMemo(() => {
    return data.filter((item) => {
      return item.title.toLowerCase().includes(cleanQuery)
    })
  }, [data, cleanQuery])

  return { searchQuery: cleanQuery, searchResults }
}
