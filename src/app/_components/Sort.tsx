'use client'

import { useState } from 'react'

import { useSort } from '@/hooks/useSort'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { SortListbox } from '@/components/SortListbox'

import { type SortOption } from '@/types/sortTypes'

import { SORT_KEY } from '@/constants/searchParams'

type SortProps = {
  query: ReturnType<typeof useSort>['sortQuery']
}

export function Sort({ query }: SortProps) {
  const [sortOption, setSortOption] = useState<SortOption>(query)
  const { updateSearchParams } = useUpdateSearchParams()

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
