import { type CategoryMap, type CategoryYAMLData } from '@/types/categoryTypes'
import { type CMSCollectionName, type CMSFieldOption } from '@/types/cmsConfig'

import { getCMSFieldOptions, getCollectionConfig } from '@/utils/cmsConfigUtils'
import { readAndValidateYamlFiles } from '@/utils/yamlUtils'

type GetCategoryLabelParams = {
  collectionName: CMSCollectionName
  category: string
}

const CATEGORY_FIELD_NAME = 'category'

function transformCategoryDataToSettings(options: Array<CMSFieldOption>) {
  return options.map((option) => ({
    id: option.value,
    name: option.label,
  }))
}

function getCategoryData(collectionName: CMSCollectionName) {
  const { fields } = getCollectionConfig(collectionName)
  return getCMSFieldOptions(fields, CATEGORY_FIELD_NAME)
}

export function getCategoryDataFromDirectory(directoryPath: string) {
  const categoriesData =
    readAndValidateYamlFiles<CategoryYAMLData>(directoryPath)
  const categoryMap: CategoryMap = {}

  categoriesData.forEach(({ slug, name }) => {
    categoryMap[slug] = name
  })

  return categoryMap
}

export function getCategorySettings(collectionName: CMSCollectionName) {
  const rawCategories = getCategoryData(collectionName)
  const categoryOptions = transformCategoryDataToSettings(rawCategories)
  const categoryIds = categoryOptions.map((setting) => setting.id)

  return { categoryOptions, validCategoryIds: categoryIds }
}

export function getEventsCategorySettings() {
  const eventSettings = getCategorySettings('event_entries')
  const { categoryOptions, validCategoryIds } = eventSettings

  return { categoryOptions, validCategoryIds }
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
