'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Route } from 'next'

import { SearchInput } from '@/components/SearchInput'

import { buildSearchParams } from '@/utils/buildSearchParams'

import { PAGE_KEY, SEARCH_KEY } from '@/constants/searchParams'

type BlogSearchInputProps = {
  searchQuery: string
}

const FIRST_PAGE = 1

export function BlogSearchInput({ searchQuery }: BlogSearchInputProps) {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newParams = buildSearchParams(
      { [SEARCH_KEY]: event.target.value, [PAGE_KEY]: FIRST_PAGE },
      params,
    )
    const newRoute = `${pathname}?${newParams}` as Route
    router.push(newRoute, { scroll: false })
  }

  return (
    <SearchInput
      searchQuery={searchQuery || ''}
      onSearchChange={handleSearchChange}
    />
  )
}
