import { useMemo } from 'react'

import type { AllFilterOption } from '@/types/filterTypes'

import {
  getCMSFieldOptionsAndValidIds,
  type CMSFieldOptionsAndValidIdsParams,
} from '@/utils/getCMSFieldOptionsAndValidIds'

export type UseFilterOptionsProps = CMSFieldOptionsAndValidIdsParams & {
  allOption: AllFilterOption
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
