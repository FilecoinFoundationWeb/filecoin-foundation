import type { CategoryMap } from '@/types/categoryTypes'
import type { CMSCollectionName } from '@/types/cmsConfig'

import { getCMSFieldOptions, getCollectionConfig } from '@/utils/cmsConfigUtils'

type GetCategoryLabelParams = {
  collectionName: CMSCollectionName
  category: string
}

export function getCategorySettingsFromMap(categoryMap: CategoryMap) {
  const categoryOptions = Object.entries(categoryMap).map(([id, name]) => ({
    id,
    name,
  }))
  const categoryIds = categoryOptions.map((setting) => setting.id)

  return { categoryOptions, validCategoryIds: categoryIds }
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
