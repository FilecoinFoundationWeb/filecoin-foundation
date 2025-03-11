import {
  getCategoryLabel as sharedGetCategoryLabel,
  type GetCategoryLabelParams as SharedGetCategoryLabelParams,
} from '@filecoin-foundation/utils/getCategoryLabel'

type GetCategoryLabelParams = Omit<SharedGetCategoryLabelParams, 'configData'>

import configData from '@/data/cmsConfigSchema.json'

export function getCategoryLabel({
  collectionName,
  category,
  fieldName,
}: GetCategoryLabelParams) {
  return sharedGetCategoryLabel({
    collectionName,
    category,
    configData,
    fieldName,
  })
}
