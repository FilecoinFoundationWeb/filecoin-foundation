import { z } from 'zod'

import {
  type CategoryMap,
  type CategorySetting,
  type CategoryYAMLData,
} from '@/types/categoryTypes'
import { type CMSFieldOption, type CMSCollectionName } from '@/types/cmsConfig'

import { getCollectionConfig, getCMSFieldOptions } from '@/utils/cmsConfigUtils'
import { readAndValidateYamlFiles } from '@/utils/yamlUtils'

import { pastEventsSetting } from '@/constants/categoryConstants'

type GetCategoryLabelParams = {
  collectionName: CMSCollectionName
  category: string
}

const CATEGORY_FIELD_NAME = 'category'

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
  const categorySettings = transformCategoryDataToSettings(rawCategories)
  const categoryIds = categorySettings.map((setting) => setting.id)

  return { categorySettings, validCategoryOptions: categoryIds }
}

export function getEventsCategorySettings() {
  const eventSettings = getCategorySettings('event_entries')
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

export function getCategoryLabel({
  collectionName,
  category,
}: GetCategoryLabelParams) {
  const { fields } = getCollectionConfig(collectionName)
  const categoryOptions = getCMSFieldOptions(fields, CATEGORY_FIELD_NAME)
  const option = categoryOptions.find((option) => option.value === category)

  return option ? option.label : category
}

export function createCategorySchema(
  validCategoryOptions: string[],
): z.ZodTypeAny {
  if (validCategoryOptions.length === 0) {
    return z.never()
  } else if (validCategoryOptions.length === 1) {
    return z.literal(validCategoryOptions[0])
  } else {
    return z.union(
      validCategoryOptions.map((option) => z.literal(option)) as [
        z.ZodLiteral<string>,
        z.ZodLiteral<string>,
        ...z.ZodLiteral<string>[],
      ],
    )
  }
}
