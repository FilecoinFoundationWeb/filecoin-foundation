'use client'

import { useListboxQueryState } from '@filecoin-foundation/hooks/useListboxQueryState'
import { SORT_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { CalendarBlank } from '@phosphor-icons/react'

import { getSortOptions } from '@/utils/getSortOptions'

import { SortListbox } from '@/components/SortListbox'

import { eventsViewConfigs } from '../constants/viewConfigs'

const options = getSortOptions(eventsViewConfigs)

export function EventSort() {
  const [selectedSort, setSelectedSort] = useListboxQueryState({
    key: SORT_KEY,
    options: options,
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
