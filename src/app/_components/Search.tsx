'use client'

import { useState, useEffect } from 'react'

import { useSearchParams } from 'next/navigation'

import { useDebounceCallback } from 'usehooks-ts'

import { useSearch } from '@/hooks/useSearch'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { SearchInput } from '@/components/SearchInput'

import { DEFAULT_PAGE_NUMBER } from '@/constants/paginationConstants'
import { PAGE_KEY, SEARCH_KEY } from '@/constants/searchParams'

export type SearchProps = {
  query: ReturnType<typeof useSearch>['searchQuery']
  id: 'mobile-search' | 'web-search'
}

const DEBOUNCE_DELAY = 400

export function Search({ query, id }: SearchProps) {
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

  console.log({ id })

  return (
    <SearchInput
      id={id}
      searchQuery={value || ''}
      onSearchChange={handleSearchChange}
    />
  )
}
