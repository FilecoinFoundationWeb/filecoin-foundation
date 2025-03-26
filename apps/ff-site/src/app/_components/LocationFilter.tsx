'use client'

import { DEFAULT_LOCATION_FILTER_OPTION } from '@filecoin-foundation/hooks/useFilter'
import type { OptionType } from '@filecoin-foundation/ui/Listbox/ListboxOption'
import { LOCATION_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { GlobeSimple } from '@phosphor-icons/react'

import { useListboxQueryState } from '@/hooks/useListboxQueryState'

import { FilterListbox } from '@/components/FilterListbox'

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
