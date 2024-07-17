import {
  type CategoryMap,
  type CategorySetting,
  type CategoryYAMLData,
} from '@/types/categoryTypes'
import { type CMSFieldOption, type CMSCollectionName } from '@/types/cmsConfig'

import { getCollectionConfig, getCMSFieldOptions } from '@/utils/cmsConfigUtils'
import { readAndValidateYamlFiles } from '@/utils/yamlUtils'

import { pastEventsSetting } from '@/constants/categoryConstants'

function transformCategoryDataToSettings(
  options: CMSFieldOption[],
): CategorySetting[] {
  return options.map((option) => ({
    id: option.value,
    name: option.label,
  }))
}

function getCategoryData(collectionName: CMSCollectionName) {
  const { fields } = getCollectionConfig(collectionName)
  const categoriesData = getCMSFieldOptions(fields, 'category')

  return categoriesData
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
  const categorySettings = transformCategoryDataToSettings(rawCategories)
  const categoryIds = categorySettings.map((setting) => setting.id)

  return { categorySettings, validCategoryOptions: categoryIds }
}

export function getEventsCategorySettings() {
  const eventSettings = getCategorySettings('events')
  const { categorySettings, validCategoryOptions } = eventSettings

  return {
    categorySettings: [...categorySettings, pastEventsSetting],
    validCategoryOptions: [...validCategoryOptions, pastEventsSetting.id],
  }
}

export function getCategorySettingsFromMap(categoryMap: CategoryMap) {
  const categorySettings = Object.entries(categoryMap).map(([id, name]) => ({
    id,
    name,
  }))
  const categoryIds = categorySettings.map((setting) => setting.id)

  return { categorySettings, validCategoryOptions: categoryIds }
}
