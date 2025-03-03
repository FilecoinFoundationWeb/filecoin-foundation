'use client'

import { useState, useEffect } from 'react'

import { useSearchParams } from 'next/navigation'

import { useUpdateSearchParams } from '@filecoin-foundation/hooks/useUpdateSearchParams'
import { SearchInput } from '@filecoin-foundation/ui/SearchInput'
import { DEFAULT_PAGE_NUMBER } from '@filecoin-foundation/utils/constants/paginationConstants'
import {
  PAGE_KEY,
  SEARCH_KEY,
} from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { useDebounceCallback } from 'usehooks-ts'
import type { useSearch } from './useSearch'

export type SearchProps = {
  query: ReturnType<typeof useSearch>['searchQuery']
}

const DEBOUNCE_DELAY = 400

export function Search({ query }: SearchProps) {
  const [value, setValue] = useState(query)
  const params = useSearchParams()

  useEffect(() => {
    const searchIsReset = !query

    if (searchIsReset) {
      setValue('')
    }
  }, [query])

  const { updateSearchParams } = useUpdateSearchParams()

  const debouncedUpdateSearchParams = useDebounceCallback(
    updateSearchParams,
    DEBOUNCE_DELAY,
  )

  function handleSearchChange(newValue: string) {
    setValue(newValue)

    const existingPageParam = params.get(PAGE_KEY)

    if (
      existingPageParam &&
      existingPageParam !== String(DEFAULT_PAGE_NUMBER)
    ) {
      debouncedUpdateSearchParams({
        [SEARCH_KEY]: newValue,
        [PAGE_KEY]: DEFAULT_PAGE_NUMBER,
      })
    } else {
      debouncedUpdateSearchParams({ [SEARCH_KEY]: newValue })
    }
  }

  return <SearchInput query={value || ''} onChange={handleSearchChange} />
}
