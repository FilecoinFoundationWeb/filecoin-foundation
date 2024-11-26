'use client'

import { useQueryState, parseAsString } from 'nuqs'

import { ALL_LOCATIONS_OPTION } from '@/constants/filterConstants'
import { LOCATION_KEY } from '@/constants/searchParams'

import { FilterListbox } from '@/components/FilterListbox'
import { type OptionType } from '@/components/ListboxOption'

type LocationFilterProps = {
  options: Array<OptionType>
}

export function LocationFilter({ options }: LocationFilterProps) {
  const [optionId, setOptionId] = useQueryState(
    LOCATION_KEY,
    parseAsString
      .withDefault(ALL_LOCATIONS_OPTION.id)
      .withOptions({ shallow: false }),
  )

  const selectedCategory =
    options.find((option) => option.id === optionId) || ALL_LOCATIONS_OPTION

  return (
    <FilterListbox
      selected={selectedCategory}
      options={options}
      onChange={(option) => setOptionId(option.id)}
    />
  )
}
