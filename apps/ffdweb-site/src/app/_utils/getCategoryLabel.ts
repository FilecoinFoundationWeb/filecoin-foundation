import {
  getCategoryLabel as sharedGetCategoryLabel,
  type GetCategoryLabelParams as SharedGetCategoryLabelParams,
} from '@filecoin-foundation/utils/getCategoryLabel'

import type { FFDWebCMSCollectionName } from '@/types/cmsTypes'

import configData from '@/data/cmsConfigSchema.json'

type GetCategoryLabelParams = Omit<
  SharedGetCategoryLabelParams<FFDWebCMSCollectionName>,
  'configData'
>

export function getCategoryLabel(args: GetCategoryLabelParams) {
  return sharedGetCategoryLabel<FFDWebCMSCollectionName>({
    configData,
    ...args,
  })
}
