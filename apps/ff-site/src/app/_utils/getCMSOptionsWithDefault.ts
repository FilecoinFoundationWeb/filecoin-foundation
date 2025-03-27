import type { DefaultFilterOptionType } from '@filecoin-foundation/hooks/useFilter/types'

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
