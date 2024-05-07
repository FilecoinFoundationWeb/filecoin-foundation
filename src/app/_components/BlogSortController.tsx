'use client'

import { useState, useEffect } from 'react'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import {
  type SortOptionType,
  DEFAULT_SORT_OPTION,
  SortListbox,
} from '@/components/SortListbox'

export function BlogSortController() {
  const [sortOption, setSortOption] =
    useState<SortOptionType>(DEFAULT_SORT_OPTION)
  const updateSearchParams = useUpdateSearchParams()

  useEffect(() => {
    updateSearchParams({ sort: sortOption })
  }, [sortOption, updateSearchParams])

  return (
    <SortListbox sortOption={sortOption} onSortOptionChange={setSortOption} />
  )
}
