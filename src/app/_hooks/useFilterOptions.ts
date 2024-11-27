import { useMemo } from 'react'

import {
  getCMSFieldOptionsAndValidIds,
  type CMSFieldOptionsAndValidIdsParams,
} from '@/utils/getCMSFieldOptionsAndValidIds'

type Option = ReturnType<
  typeof getCMSFieldOptionsAndValidIds
>['options'][number]

export type UseFilterOptionsProps = CMSFieldOptionsAndValidIdsParams & {
  allOption: Option
}

export function useFilterOptions({
  collectionName,
  fieldName,
  allOption,
}: UseFilterOptionsProps) {
  const { options } = getCMSFieldOptionsAndValidIds({
    collectionName,
    fieldName,
  })

  const optionsWithAll = useMemo(() => {
    return [allOption, ...options]
  }, [allOption, options])

  return { optionsWithAll }
}
