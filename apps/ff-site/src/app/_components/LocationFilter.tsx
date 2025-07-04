'use client'

import { GlobeSimpleIcon } from '@phosphor-icons/react'

import { DEFAULT_LOCATION_FILTER_OPTION } from '@filecoin-foundation/hooks/useFilter/constants'
import { useListboxQueryState } from '@filecoin-foundation/hooks/useListboxQueryState'
import { FilterListbox } from '@filecoin-foundation/ui/FilterListbox'
import type { OptionType } from '@filecoin-foundation/ui/Listbox/ListboxOption'
import { LOCATION_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'

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
      buttonIcon={GlobeSimpleIcon}
      onChange={setLocationOption}
    />
  )
}
