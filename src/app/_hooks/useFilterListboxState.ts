import { parseAsString, useQueryState } from 'nuqs'

import type { OptionType } from '@/components/Listbox/ListboxOption'

type FilterListboxStateConfig = {
  key: string
  options: Array<OptionType>
  defaultOption: OptionType
}

export function useFilterListboxState({
  key,
  options,
  defaultOption,
}: FilterListboxStateConfig) {
  const [optionId, setOptionId] = useQueryState<OptionType['id']>(
    key,
    parseAsString.withDefault(defaultOption.id).withOptions({ shallow: false }),
  )

  const selectedOption =
    options.find((option) => option.id === optionId) || defaultOption

  function setOption(option: OptionType) {
    setOptionId(option.id)
  }

  return [selectedOption, setOption] as const
}
