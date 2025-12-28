'use client'

import { CalendarBlankIcon } from '@phosphor-icons/react'

import { useListboxQueryState } from '@filecoin-foundation/hooks/useListboxQueryState'
import type { OptionType } from '@filecoin-foundation/ui/Listbox/ListboxOption'
import { SORT_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'

import { getSortOptions } from '@/utils/getSortOptions'

import { SortListbox } from '@/components/SortListbox'

import { eventsViewConfigs } from '../constants/viewConfigs'

const options = getSortOptions(eventsViewConfigs)

type EventSortProps = {
  defaultOption?: OptionType
}

export function EventSort({ defaultOption }: EventSortProps) {
  const [selectedSort, setSelectedSort] = useListboxQueryState({
    key: SORT_KEY,
    options: options,
    defaultOption: defaultOption || options[0],
  })

  return (
    <SortListbox
      options={options}
      selected={selectedSort}
      buttonIcon={CalendarBlankIcon}
      onChange={setSelectedSort}
    />
  )
}
