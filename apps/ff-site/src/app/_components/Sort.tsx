'use client'

import { useState, useEffect } from 'react'

import { useUpdateSearchParams } from '@filecoin-foundation/hooks/useUpdateSearchParams'
import type { OptionType } from '@filecoin-foundation/ui/Listbox/ListboxOption'
import { SORT_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'

import { useSort } from '@/hooks/useSort'

import { SortListbox } from './SortListbox'

type SortProps = {
  query: ReturnType<typeof useSort>['sortQuery']
  options: ReadonlyArray<OptionType>
  defaultQuery: ReturnType<typeof useSort>['defaultSortQuery']
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
