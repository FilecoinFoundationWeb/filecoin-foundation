import type { DefaultFilterOptionType } from '@/types/filterTypes'

import {
  getCMSFieldOptionsAndValidIds,
  type CMSFieldOptionsAndValidIdsParams,
} from './getCMSFieldOptionsAndValidIds'

type CMSOptionsWithDefaultConfig = CMSFieldOptionsAndValidIdsParams & {
  defaultOption: DefaultFilterOptionType
}

export function getCMSOptionsWithDefault({
  collectionName,
  fieldName,
  defaultOption,
}: CMSOptionsWithDefaultConfig) {
  const { options: CMSOptions } = getCMSFieldOptionsAndValidIds({
    collectionName,
    fieldName,
  })

  return [defaultOption, ...CMSOptions]
}
