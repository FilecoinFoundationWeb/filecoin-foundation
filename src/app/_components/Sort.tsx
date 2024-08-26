'use client'

import { useState, useEffect } from 'react'

import { useSort } from '@/hooks/useSort'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { SortListbox } from '@/components/SortListbox'

import {
  type DefaultSortType,
  type SortId,
  type SortOption,
} from '@/types/sortTypes'

import { SORT_KEY } from '@/constants/searchParams'

type SortProps = {
  query: ReturnType<typeof useSort>['sortQuery']
  options: ReadonlyArray<SortOption>
  defaultOption: DefaultSortType
}

export function Sort({ query, options, defaultOption }: SortProps) {
  const [sortId, setSortId] = useState<SortId>(query)
  const { updateSearchParams } = useUpdateSearchParams()

  useEffect(() => {
    const sortIsReset = query === defaultOption

    if (sortIsReset) {
      setSortId(defaultOption)
    }
  }, [query, defaultOption])

  function handleSortChange(newValue: SortId) {
    setSortId(newValue)
    updateSearchParams({ [SORT_KEY]: newValue })
  }

  return (
    <SortListbox
      options={options}
      sortId={sortId}
      onChange={handleSortChange}
    />
  )
}
