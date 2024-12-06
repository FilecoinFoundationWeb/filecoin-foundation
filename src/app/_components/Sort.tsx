'use client'

import { startTransition, useState, useEffect } from 'react'

import { type SortOption, type ValidSortKey } from '@/types/sortTypes'

import { SORT_KEY } from '@/constants/searchParams'

import { useSort } from '@/hooks/useSort'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { SortListbox } from '@/components/SortListbox'

type SortProps = {
  query: ReturnType<typeof useSort>['sortQuery']
  options: ReadonlyArray<SortOption>
  defaultQuery: ReturnType<typeof useSort>['defaultSortQuery']
}

export function Sort({ query, options, defaultQuery }: SortProps) {
  const [sortId, setSortId] = useState<ValidSortKey>(query)
  const { updateSearchParams } = useUpdateSearchParams()

  const selectedOption = options.find((option) => option.id === sortId)

  useEffect(() => {
    const sortIsReset = query === defaultQuery

    if (sortIsReset) {
      startTransition(() => {
        setSortId(defaultQuery)
      })
    }
  }, [query, defaultQuery])

  function handleSortChange(newOption: SortOption) {
    startTransition(() => {
      setSortId(newOption.id)
    })
    updateSearchParams({ [SORT_KEY]: newOption.id })
  }

  return (
    <SortListbox
      options={options}
      selected={selectedOption}
      onChange={handleSortChange}
    />
  )
}
