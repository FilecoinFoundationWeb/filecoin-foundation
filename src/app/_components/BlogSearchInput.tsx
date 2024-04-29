'use client'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { SearchInput } from '@/components/SearchInput'

type BlogSearchInputProps = {
  searchQuery: string
}

export function BlogSearchInput({ searchQuery }: BlogSearchInputProps) {
  const updateSearchParams = useUpdateSearchParams()

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    updateSearchParams({
      search: event.target.value,
      page: '1',
    })
  }

  return (
    <SearchInput
      searchQuery={searchQuery}
      onSearchChange={handleSearchChange}
    />
  )
}
