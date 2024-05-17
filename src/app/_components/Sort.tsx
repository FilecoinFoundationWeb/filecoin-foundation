'use client'

import { useState, useEffect } from 'react'

import { useSort } from '@/hooks/useSort'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { SortListbox } from '@/components/SortListbox'

import { type SortOptionItems } from '@/types/sortTypes'

import { SORT_KEY } from '@/constants/searchParams'

type SortProps = {
  query: ReturnType<typeof useSort>['sortQuery']
}

export function Sort({ query }: SortProps) {
  const [sortOption, setSortOption] = useState<SortOptionItems>(query)
  const updateSearchParams = useUpdateSearchParams()

  function handleSortChange(newValue: SortOptionItems) {
    setSortOption(newValue)
    updateSearchParams({ [SORT_KEY]: newValue })
  }

  useEffect(() => {
    updateSearchParams({ [SORT_KEY]: query })
  }, [query, updateSearchParams])

  return (
    <SortListbox
      sortOption={sortOption}
      onSortOptionChange={handleSortChange}
    />
  )
}
