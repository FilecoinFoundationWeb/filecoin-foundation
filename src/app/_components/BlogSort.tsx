'use client'

import { useState, useEffect } from 'react'

import { useSortQuery } from '@/hooks/useSortQuery'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { SortListbox } from '@/components/SortListbox'

import { type SortOptionItems } from '@/types/sortTypes'

import { SORT_KEY } from '@/constants/searchParams'

type BlogSortProps = {
  query: ReturnType<typeof useSortQuery>['sortQuery']
}

export function BlogSort({ query }: BlogSortProps) {
  const [sortOption, setSortOption] = useState<SortOptionItems>(query)
  const updateSearchParams = useUpdateSearchParams()

  function handleSortChange(newValue: SortOptionItems) {
    setSortOption(newValue)
    updateSearchParams({ [SORT_KEY]: newValue })
  }

  useEffect(() => {
    updateSearchParams({ [SORT_KEY]: query })
  }, [])

  return (
    <SortListbox
      sortOption={sortOption}
      onSortOptionChange={handleSortChange}
    />
  )
}
