import type { DefaultFilterOptionType } from '@/types/filterTypes'

import {
  getCMSFieldOptionsAndValidIds,
  type CMSFieldOptionsAndValidIdsParams,
} from './getCMSFieldOptionsAndValidIds'

type TODO = CMSFieldOptionsAndValidIdsParams & {
  defaultOption: DefaultFilterOptionType
}

export function getCMSOptionsWithDefault({
  collectionName,
  fieldName,
  defaultOption,
}: TODO) {
  const { options: CMSOptions } = getCMSFieldOptionsAndValidIds({
    collectionName,
    fieldName,
  })

  return [defaultOption, ...CMSOptions]
}
