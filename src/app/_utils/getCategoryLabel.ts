import { CMSCollectionName } from '@/types/cmsConfig'

import { getCollectionConfig, getCMSFieldOptions } from '@/utils/cmsConfigUtils'

type GetCategoryLabelParams = {
  collectionName: CMSCollectionName
  category: string
}

export function getCategoryLabel({
  collectionName,
  category,
}: GetCategoryLabelParams) {
  const { fields } = getCollectionConfig(collectionName)
  const categoryOptions = getCMSFieldOptions(fields, 'category')
  const option = categoryOptions.find((option) => option.value === category)

  return option ? option.label : category
}
