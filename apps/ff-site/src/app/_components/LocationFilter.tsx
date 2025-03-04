'use client'

import { LOCATION_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { GlobeSimple } from '@phosphor-icons/react'

import { DEFAULT_LOCATION_FILTER_OPTION } from '@/constants/filterConstants'

import { useListboxQueryState } from '@/hooks/useListboxQueryState'

import { FilterListbox } from '@/components/FilterListbox'
import type { OptionType } from '@/components/Listbox/ListboxOption'

type LocationFilterProps = {
  options: Array<OptionType>
}

export function LocationFilter({ options }: LocationFilterProps) {
  const [locationOption, setLocationOption] = useListboxQueryState({
    key: LOCATION_KEY,
    options,
    defaultOption: DEFAULT_LOCATION_FILTER_OPTION,
  })

  return (
    <FilterListbox
      selected={locationOption}
      options={options}
      buttonIcon={GlobeSimple}
      onChange={setLocationOption}
    />
  )
}
