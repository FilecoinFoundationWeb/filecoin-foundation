import { parseAsString, useQueryState } from 'nuqs'

import type { OptionType } from '@/components/Listbox/ListboxOption'

type ListboxQueryStateConfig = {
  defaultOption: OptionType,
  key: string,
  options: Array<OptionType>
}

export function useListboxQueryState({
  key,
  options,
  defaultOption,
}: ListboxQueryStateConfig) {
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
