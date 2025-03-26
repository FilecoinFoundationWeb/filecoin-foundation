import { useMemo } from 'react'

import { type AnyObject } from '@filecoin-foundation/utils/types/utilTypes'

import type { DefaultFilterOptionType } from '@/types/filterTypes'

import {
  getCMSFieldOptionsAndValidIds,
  type CMSFieldOptionsAndValidIdsParams,
} from '@/utils/getCMSFieldOptionsAndValidIds'
import { sumCountValues } from '@/utils/sumCountValues'

type UseFilterOptionsWithCountProps<Entry extends AnyObject> =
  CMSFieldOptionsAndValidIdsParams & {
    defaultOption: DefaultFilterOptionType
    entries: Array<Entry>
  }

export function useListboxOptions<Entry extends AnyObject>({
  collectionName,
  fieldName,
  defaultOption,
  entries,
}: UseFilterOptionsWithCountProps<Entry>) {
  const { options: CMSOptions } = useMemo(
    () =>
      getCMSFieldOptionsAndValidIds({
        collectionName,
        fieldName,
      }),
    [collectionName, fieldName],
  )

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

  return { optionsWithCount }
}
