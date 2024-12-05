import { useMemo } from 'react'

import type { DefaultFilterOptionType } from '@/types/filterTypes'
import { type Object } from '@/types/utils'

import {
  getCMSFieldOptionsAndValidIds,
  type CMSFieldOptionsAndValidIdsParams,
} from '@/utils/getCMSFieldOptionsAndValidIds'
import { sumCountValues } from '@/utils/sumCountValues'

type UseFilterOptionsWithCountProps<Entry extends Object> =
  CMSFieldOptionsAndValidIdsParams & {
    defaultOption: DefaultFilterOptionType
    entries: Array<Entry>
  }

export function useListboxOptions<Entry extends Object>({
  collectionName,
  fieldName,
  defaultOption,
  entries,
}: UseFilterOptionsWithCountProps<Entry>) {
  const { options: CMSOptions } = getCMSFieldOptionsAndValidIds({
    collectionName,
    fieldName,
  })

  const optionsWithCount = useMemo(() => {
    const CMSOptionsWithCount = CMSOptions.map((option) => {
      const matches = entries.filter((entry) => entry[fieldName] === option.id)

      return {
        ...option,
        count: matches.length,
      }
    })

    const defaultOptionWithCount = {
      ...defaultOption,
      count: sumCountValues(CMSOptionsWithCount),
    }

    return [defaultOptionWithCount, ...CMSOptionsWithCount]
  }, [CMSOptions, defaultOption, entries, fieldName])

  return optionsWithCount
}
