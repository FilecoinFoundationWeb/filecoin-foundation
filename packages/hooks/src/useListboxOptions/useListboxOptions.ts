import { useMemo } from 'react'

import type { DefaultFilterOptionType } from '@filecoin-foundation/hooks/useFilter/types'
import type { OptionType } from '@filecoin-foundation/ui/Listbox/ListboxOption'
import { type AnyObject } from '@filecoin-foundation/utils/types/utilTypes'

import { sumCountValues } from './utils'

type UseListboxOptionsArgs<Entry extends AnyObject> = {
  options: Array<OptionType>
  defaultOption: DefaultFilterOptionType
  entries: Array<Entry>
  countBy: keyof Entry
}

export function useListboxOptions<Entry extends AnyObject>({
  options,
  countBy,
  defaultOption,
  entries,
}: UseListboxOptionsArgs<Entry>) {
  const allOptionsWithCount = useMemo(() => {
    const optionsWithCount = options.map((option) => {
      const matches = entries.filter((entry) => entry[countBy] === option.id)
      return { ...option, count: matches.length }
    })

    const defaultOptionWithCount = {
      ...defaultOption,
      count: sumCountValues(optionsWithCount),
    }

    return [defaultOptionWithCount, ...optionsWithCount]
  }, [options, defaultOption, entries, countBy])

  return {
    options: [defaultOption, ...options],
    optionsWithCount: allOptionsWithCount,
  }
}
