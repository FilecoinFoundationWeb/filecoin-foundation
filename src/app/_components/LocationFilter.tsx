'use client'

import { GlobeSimple } from '@phosphor-icons/react'

import { DEFAULT_LOCATION_FILTER_OPTION } from '@/constants/filterConstants'
import { LOCATION_KEY } from '@/constants/searchParams'

import { useFilterListboxState } from '@/hooks/useFilterListboxState'

import { FilterListbox } from '@/components/FilterListbox'
import type { OptionType } from '@/components/Listbox/ListboxOption'

type LocationFilterProps = {
  options: Array<OptionType>
}

export function LocationFilter({ options }: LocationFilterProps) {
  const [locationOption, setLocationOption] = useFilterListboxState({
    key: LOCATION_KEY,
    options,
    defaultOption: DEFAULT_LOCATION_FILTER_OPTION,
  })

  return (
    <FilterListbox
      selected={locationOption}
      options={options}
      icon={GlobeSimple}
      onChange={setLocationOption}
    />
  )
}
