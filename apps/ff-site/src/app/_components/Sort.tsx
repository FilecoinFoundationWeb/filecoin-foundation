'use client'

import { parseAsString, useQueryState } from 'nuqs'

import type { OptionType } from '@filecoin-foundation/ui/Listbox/ListboxOption'
import { SORT_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'

import { SortListbox } from './SortListbox'

type SortProps = {
  options: ReadonlyArray<OptionType>
  defaultOption?: OptionType
}

export function Sort({ options, defaultOption = options[0] }: SortProps) {
  const [optionId, setOptionId] = useQueryState<OptionType['id']>(
    SORT_KEY,
    parseAsString.withDefault(defaultOption.id).withOptions({ shallow: false }),
  )

  const selectedOption =
    options.find((option) => option.id === optionId) || defaultOption

  return (
    <SortListbox
      options={options}
      selected={selectedOption}
      onChange={setOption}
    />
  )

  function setOption(newOption: OptionType) {
    setOptionId(newOption.id)
  }
}
