'use client'

import { useState } from 'react'

import { useSearchParams } from 'next/navigation'

import { useDebounceCallback } from 'usehooks-ts'

import { useSearch } from '@/hooks/useSearch'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { SearchInput } from '@/components/SearchInput'

import { PAGE_KEY, SEARCH_KEY } from '@/constants/searchParams'

type BlogSearchInputProps = {
  query: ReturnType<typeof useSearch>['searchQuery']
}

const TYPE_DEBOUNCE_DELAY = 400

export function BlogSearchInput({ query }: BlogSearchInputProps) {
  const [value, setValue] = useState(query)
  const params = useSearchParams()

  const updateSearchParams = useUpdateSearchParams()

  const debouncedUpdateSearchParams = useDebounceCallback(
    updateSearchParams,
    TYPE_DEBOUNCE_DELAY,
  )

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value
    setValue(newValue)

    const existingPageParam = params.get(PAGE_KEY)

    if (existingPageParam && existingPageParam !== '1') {
      debouncedUpdateSearchParams({
        [SEARCH_KEY]: newValue,
        [PAGE_KEY]: '1',
      })
    } else {
      debouncedUpdateSearchParams({ [SEARCH_KEY]: newValue })
    }
  }

  return <SearchInput searchQuery={value} onSearchChange={handleSearchChange} />
}
