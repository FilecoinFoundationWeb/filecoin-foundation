import { useMemo } from 'react'

import type { AllFiltersOptionType } from '@/types/filterTypes'
import { type Object } from '@/types/utils'

import {
  getCMSFieldOptionsAndValidIds,
  type CMSFieldOptionsAndValidIdsParams,
} from '@/utils/getCMSFieldOptionsAndValidIds'
import { sumObjectCounts } from '@/utils/sumObjectCounts'

type UseFilterOptionsWithCountProps<Entry extends Object> =
  CMSFieldOptionsAndValidIdsParams & {
    allOption: AllFiltersOptionType
    entries: Array<Entry>
  }

export function useListboxOptions<Entry extends Object>({
  collectionName,
  fieldName,
  allOption,
  entries,
}: UseFilterOptionsWithCountProps<Entry>) {
  const { options } = getCMSFieldOptionsAndValidIds({
    collectionName,
    fieldName,
  })

  const optionsWithCount = useMemo(() => {
    return options.map((option) => {
      const matches = entries.filter((entry) => entry[fieldName] === option.id)

      return {
        ...option,
        count: matches.length,
      }
    })
  }, [entries, fieldName, options])

  const optionsWithAllAndCount = useMemo(() => {
    const allOptionWithCount = {
      ...allOption,
      count: sumObjectCounts(optionsWithCount),
    }

    return [allOptionWithCount, ...optionsWithCount]
  }, [allOption, optionsWithCount])

  return optionsWithAllAndCount
}
