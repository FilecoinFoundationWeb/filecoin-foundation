'use client'

import { useState } from 'react'

import { useDebounceCallback } from 'usehooks-ts'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { SearchInput } from '@/components/SearchInput'

type BlogSearchInputProps = {
  searchQuery: string
}

export function BlogSearchInput({ searchQuery }: BlogSearchInputProps) {
  const [value, setValue] = useState(searchQuery)

  const updateSearchParams = useUpdateSearchParams()

  const debouncedUpdateSearchParams = useDebounceCallback(
    updateSearchParams,
    500,
  )

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value
    setValue(newValue)
    debouncedUpdateSearchParams({ search: newValue, page: '1' })
  }

  return <SearchInput searchQuery={value} onSearchChange={handleSearchChange} />
}
