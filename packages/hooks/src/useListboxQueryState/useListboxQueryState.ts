import type { OptionType } from '@filecoin-foundation/ui/Listbox/ListboxOption'
import { parseAsString, useQueryState } from 'nuqs'

import { useResetPageQuery } from '@filecoin-foundation/hooks/useResetPageQuery'

type ListboxQueryStateConfig = {
  key: string
  options: Array<OptionType>
  defaultOption: OptionType
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
  const resetPageQuery = useResetPageQuery()

  const selectedOption =
    options.find((option) => option.id === optionId) || defaultOption

  function setOption(option: OptionType) {
    resetPageQuery()
    setOptionId(option.id)
  }

  return [selectedOption, setOption] as const
}
