'use client'

import { useQueryState, parseAsString } from 'nuqs'

import {
  DEFAULT_FILTER_ID,
  DEFAULT_LOCATION_FILTER_OPTION,
} from '@/constants/filterConstants'
import { LOCATION_KEY } from '@/constants/searchParams'

import { FilterListbox } from '@/components/FilterListbox'
import { type OptionType } from '@/components/Listbox/ListboxOption'

type LocationFilterProps = {
  options: Array<OptionType>
}

export function LocationFilter({ options }: LocationFilterProps) {
  const [optionId, setOptionId] = useQueryState(
    LOCATION_KEY,
    parseAsString
      .withDefault(DEFAULT_FILTER_ID)
      .withOptions({ shallow: false }),
  )

  const selectedLocation =
    options.find((option) => option.id === optionId) ||
    DEFAULT_LOCATION_FILTER_OPTION

  return (
    <FilterListbox
      selected={selectedLocation}
      options={options}
      onChange={(option) => setOptionId(option.id)}
    />
  )
}
