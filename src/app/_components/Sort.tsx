'use client'

import { useState, useEffect } from 'react'

import { type SortOption, type ValidSortKey } from '@/types/sortTypes'

import { SORT_KEY } from '@/constants/searchParams'

import { useSort } from '@/hooks/useSort'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { SortListbox } from '@/components/SortListbox'

type SortProps = {
  query: ReturnType<typeof useSort>['sortQuery']
  options: ReadonlyArray<SortOption>
  defaultOption: ReturnType<typeof useSort>['defaultQuery']
}

export function Sort({ query, options, defaultOption }: SortProps) {
  const [sortId, setSortId] = useState<ValidSortKey>(query)
  const { updateSearchParams } = useUpdateSearchParams()

  useEffect(() => {
    const sortIsReset = query === defaultOption

    if (sortIsReset) {
      setSortId(defaultOption)
    }
  }, [query, defaultOption])

  function handleSortChange(newValue: ValidSortKey) {
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
