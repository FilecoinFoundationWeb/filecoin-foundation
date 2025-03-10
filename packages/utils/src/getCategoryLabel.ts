import type { CMSCollectionName } from './types/cmsConfig'

import { getCMSFieldOptions, getCollectionConfig } from './cmsConfigUtils'

export type GetCategoryLabelParams = {
  collectionName: CMSCollectionName
  category: string
  configData: unknown
}

export function getCategoryLabel({
  collectionName,
  category,
  configData,
}: GetCategoryLabelParams) {
  const { fields } = getCollectionConfig(collectionName, configData)
  const categoryOptions = getCMSFieldOptions(fields, 'category')
  const option = categoryOptions.find((option) => option.value === category)

  return option ? option.label : category
}
