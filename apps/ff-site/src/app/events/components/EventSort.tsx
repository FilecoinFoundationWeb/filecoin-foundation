'use client'

import { SORT_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { CalendarBlank } from '@phosphor-icons/react'

import { getSortOptions } from '@/utils/getSortOptions'

import { useListboxQueryState } from '@/hooks/useListboxQueryState'

import { SortListbox } from '@/components/SortListbox'

import { eventsSortConfigs } from '../constants/sortConfigs'

const options = getSortOptions(eventsSortConfigs)

export function EventSort() {
  const [selectedSort, setSelectedSort] = useListboxQueryState({
    key: SORT_KEY,
    options: options,
    defaultOption: options[0],
  })

  return (
    <SortListbox
      options={options}
      selected={selectedSort}
      buttonIcon={CalendarBlank}
      onChange={setSelectedSort}
    />
  )
}
