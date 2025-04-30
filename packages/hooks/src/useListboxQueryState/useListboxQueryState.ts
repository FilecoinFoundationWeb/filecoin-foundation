import { useQueryState, parseAsString } from 'nuqs'

import type { OptionType } from '@filecoin-foundation/ui/Listbox/ListboxOption'

import { useResetPageQuery } from '../useResetPageQuery'

type ListboxQueryStateConfig = {
  key: string
  options: Array<OptionType> | ReadonlyArray<OptionType>
  defaultOption?: OptionType
}

export function useListboxQueryState({
  key,
  options,
  defaultOption = options[0],
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
