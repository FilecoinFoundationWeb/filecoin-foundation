'use client'

import { useQueryState, parseAsString } from 'nuqs'

import { useResetPageQuery } from '@filecoin-foundation/hooks/useResetPageQuery'
import { SEARCH_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'

import { SearchInput } from '../SearchInput'

const DEFAULT_SEARCH_QUERY = ''

export function Search() {
  const [query, setQuery] = useQueryState(
    SEARCH_KEY,
    parseAsString
      .withDefault(DEFAULT_SEARCH_QUERY)
      .withOptions({ shallow: false }),
  )

  const resetPageQuery = useResetPageQuery()

  return <SearchInput query={query} onChange={setQueryAndResetPage} />

  function setQueryAndResetPage(newValue: string) {
    setQuery(newValue)
    resetPageQuery()
  }
}
