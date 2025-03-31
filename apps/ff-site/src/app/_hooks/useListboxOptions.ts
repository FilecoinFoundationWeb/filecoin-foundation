import { useMemo } from 'react'

import type { DefaultFilterOptionType } from '@filecoin-foundation/hooks/useFilter/types'
import { sumCountValues } from '@filecoin-foundation/hooks/useListboxOptions/utils'
import { type AnyObject } from '@filecoin-foundation/utils/types/utilTypes'

import {
  getCMSFieldOptionsAndValidIds,
  type CMSFieldOptionsAndValidIdsParams,
} from '@/utils/getCMSFieldOptionsAndValidIds'

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
