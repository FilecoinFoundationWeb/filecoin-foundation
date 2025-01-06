'use client'

import { useState, useEffect } from 'react'

import { SORT_KEY } from '@/constants/searchParams'

import { useSort } from '@/hooks/useSort'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import type { OptionType } from './Listbox/ListboxOption'
import { SortListbox } from './SortListbox'

type SortProps = {
  defaultQuery: ReturnType<typeof useSort>['defaultSortQuery'],
  options: ReadonlyArray<OptionType>
  query: ReturnType<typeof useSort>['sortQuery']
}

export function Sort({ query, options, defaultQuery }: SortProps) {
  const [sortId, setSortId] = useState<OptionType['id']>(query)
  const { updateSearchParams } = useUpdateSearchParams()

  const selectedOption =
    options.find((option) => option.id === sortId) || options[0]

  useEffect(() => {
    const sortIsReset = query === defaultQuery

    if (sortIsReset) {
      setSortId(defaultQuery)
    }
  }, [query, defaultQuery])

  function handleSortChange(newOption: OptionType) {
    setSortId(newOption.id)
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
