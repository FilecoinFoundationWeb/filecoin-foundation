import {
  getCategoryLabel as sharedGetCategoryLabel,
  type GetCategoryLabelParams as SharedGetCategoryLabelParams,
} from '@filecoin-foundation/utils/getCategoryLabel'

import type { FFCMSCollectionName } from '@/types/cmsTypes'

import configData from '@/data/cmsConfigSchema.json'

type GetCategoryLabelParams = Omit<
  SharedGetCategoryLabelParams<FFCMSCollectionName>,
  'configData'
>

export function getCategoryLabel(args: GetCategoryLabelParams) {
  return sharedGetCategoryLabel<FFCMSCollectionName>({
    configData,
    ...args,
  })
}
