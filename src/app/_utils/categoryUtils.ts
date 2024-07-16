import {
  type CategoryMap,
  type CategorySetting,
  type CMSCategoryFieldMapping,
  type CategoryYAMLData,
} from '@/types/categoryTypes'
import { type CMSFieldOption } from '@/types/cmsConfig'

import { getCollectionConfig, getCMSFieldOptions } from '@/utils/cmsConfigUtils'
import { readAndValidateYamlFiles } from '@/utils/yamlUtils'

import { pastEventsSetting } from '@/constants/categoryConstants'
import { CMS_CATEGORY_FIELD_MAPPING } from '@/constants/cmsConstants'

function transformCategoryDataToSettings(
  options: CMSFieldOption[],
): CategorySetting[] {
  return options.map((option) => ({
    id: option.value,
    name: option.label,
  }))
}

function getCategoryData(
  CMSCollectionKey: keyof CMSCategoryFieldMapping,
): CMSFieldOption[] {
  const { collection, field } = CMS_CATEGORY_FIELD_MAPPING[CMSCollectionKey]
  const { fields } = getCollectionConfig(collection)
  const categoriesData = getCMSFieldOptions(fields, field)

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

export function getCategorySettings(
  CMSCollectionKey: keyof CMSCategoryFieldMapping,
) {
  const rawCategories = getCategoryData(CMSCollectionKey)
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
