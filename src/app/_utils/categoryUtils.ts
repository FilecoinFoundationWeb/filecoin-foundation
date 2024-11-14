import { type CategoryMap, type CategoryYAMLData } from '@/types/categoryTypes'
import { type CMSCollectionName } from '@/types/cmsConfig'

import { getCMSFieldOptions, getCollectionConfig } from '@/utils/cmsConfigUtils'
import { getFieldSettings } from '@/utils/cmsFieldUtils'
import { readAndValidateYamlFiles } from '@/utils/yamlUtils'

type GetCategoryLabelParams = {
  collectionName: CMSCollectionName
  category: string
}

const CATEGORY_FIELD_NAME = 'category'

export function getCategoryDataFromDirectory(directoryPath: string) {
  const categoriesData =
    readAndValidateYamlFiles<CategoryYAMLData>(directoryPath)
  const categoryMap: CategoryMap = {}

  categoriesData.forEach(({ slug, name }) => {
    categoryMap[slug] = name
  })

  return categoryMap
}

export function getCategorySettings({
  collectionName,
}: {
  collectionName: CMSCollectionName
}) {
  return getFieldSettings({ collectionName, fieldName: CATEGORY_FIELD_NAME })
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
  const categoryOptions = getCMSFieldOptions(fields, CATEGORY_FIELD_NAME)
  const option = categoryOptions.find((option) => option.value === category)

  return option ? option.label : category
}
