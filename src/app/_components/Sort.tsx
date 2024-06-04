'use client'

import { useState, useEffect } from 'react'

import { useSort } from '@/hooks/useSort'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { SortListbox } from '@/components/SortListbox'

import { type SortOption } from '@/types/sortTypes'

import { SORT_KEY } from '@/constants/searchParams'
import { DEFAULT_SORT_OPTION } from '@/constants/sortConstants'

type SortProps = {
  query: ReturnType<typeof useSort>['sortQuery']
}

export function Sort({ query }: SortProps) {
  const [sortOption, setSortOption] = useState<SortOption>(query)
  const { updateSearchParams } = useUpdateSearchParams()

  useEffect(() => {
    const sortIsReset = query === DEFAULT_SORT_OPTION

    if (sortIsReset) {
      setSortOption(DEFAULT_SORT_OPTION)
    }
  }, [query])

  function handleSortChange(newValue: SortOption) {
    setSortOption(newValue)
    updateSearchParams({ [SORT_KEY]: newValue })
  }

  return (
    <SortListbox
      sortOption={sortOption}
      onSortOptionChange={handleSortChange}
    />
  )
}
