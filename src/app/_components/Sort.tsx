'use client'

import { useState, useEffect } from 'react'

import { useSort } from '@/hooks/useSort'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { SortListbox } from '@/components/SortListbox'

import { SortSetting, type SortOption } from '@/types/sortTypes'

import { SORT_KEY } from '@/constants/searchParams'
import { DefaultSortType } from '@/constants/sortConstants'

type SortProps = {
  query: ReturnType<typeof useSort>['sortQuery']
  defaultSortOption: DefaultSortType
  sortSettings: SortSetting[]
}

export function Sort({ query, sortSettings, defaultSortOption }: SortProps) {
  const [sortOption, setSortOption] = useState<SortOption>(query)
  const { updateSearchParams } = useUpdateSearchParams()

  useEffect(() => {
    const sortIsReset = query === defaultSortOption

    if (sortIsReset) {
      setSortOption(defaultSortOption)
    }
  }, [query, defaultSortOption])

  function handleSortChange(newValue: SortOption) {
    setSortOption(newValue)
    updateSearchParams({ [SORT_KEY]: newValue })
  }

  return (
    <SortListbox
      sortSettings={sortSettings}
      sortOption={sortOption}
      onSortOptionChange={handleSortChange}
    />
  )
}
