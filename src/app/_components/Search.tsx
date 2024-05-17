'use client'

import { useState } from 'react'

import { useSearchParams } from 'next/navigation'

import { useDebounceCallback } from 'usehooks-ts'

import { useSearch } from '@/hooks/useSearch'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { SearchInput } from '@/components/SearchInput'

import { DEFAULT_PAGE_NUMBER } from '@/constants/paginationConstants'
import { PAGE_KEY, SEARCH_KEY } from '@/constants/searchParams'

type SearchProps = {
  query: ReturnType<typeof useSearch>['searchQuery']
}

const DEBOUNCE_DELAY = 400

export function Search({ query, ...rest }: SearchProps) {
  const [value, setValue] = useState(query)
  const params = useSearchParams()

  const updateSearchParams = useUpdateSearchParams()

  const debouncedUpdateSearchParams = useDebounceCallback(
    updateSearchParams,
    DEBOUNCE_DELAY,
  )

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value
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

  return (
    <SearchInput
      searchQuery={value || ''}
      onSearchChange={handleSearchChange}
    />
  )
}
