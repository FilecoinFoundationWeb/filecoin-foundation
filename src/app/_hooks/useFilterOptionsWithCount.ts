import { useMemo } from 'react'

import { type Object } from '@/types/utils'

import {
  getCMSFieldOptionsAndValidIds,
  type CMSFieldOptionsAndValidIdsParams,
} from '@/utils/getCMSFieldOptionsAndValidIds'

type Option = ReturnType<
  typeof getCMSFieldOptionsAndValidIds
>['options'][number]

type UseFilterOptionsWithCountProps<Entry extends Object> =
  CMSFieldOptionsAndValidIdsParams & {
    allOption: Option
    entries: Array<Entry>
  }

export function useFilterOptionsWithCount<Entry extends Object>({
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
    const totalCount = optionsWithCount.reduce(
      (sum, option) => sum + option.count,
      0,
    )

    const allOptionWithCount = { ...allOption, count: totalCount }

    return [allOptionWithCount, ...optionsWithCount]
  }, [allOption, optionsWithCount])

  return { optionsWithAllAndCount }
}
