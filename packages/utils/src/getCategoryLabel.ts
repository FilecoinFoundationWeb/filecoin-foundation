import type { CMSCollectionName } from './types/cmsConfig'

import { getCMSFieldOptions, getCollectionConfig } from './cmsConfigUtils'

export type GetCategoryLabelParams = {
  collectionName: CMSCollectionName
  category: string
  configData: unknown
  fieldName?: string
}

export function getCategoryLabel({
  collectionName,
  category,
  configData,
  fieldName = 'category',
}: GetCategoryLabelParams) {
  const { fields } = getCollectionConfig(collectionName, configData)
  const categoryOptions = getCMSFieldOptions(fields, fieldName)
  const option = categoryOptions.find((option) => option.value === category)

  return option ? option.label : category
}
