'use client'

import { useUpdateRoute } from '@/hooks/useUpdateRoute'

import { SearchInput } from '@/components/SearchInput'

type BlogSearchInputProps = {
  searchQuery: string
}

export function BlogSearchInput({ searchQuery }: BlogSearchInputProps) {
  const updateRoute = useUpdateRoute()

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    updateRoute({
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
