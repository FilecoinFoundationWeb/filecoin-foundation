import {
  createCategorySchema,
  getCategoryDataFromDirectory,
  getCategorySettingsFromMap,
} from '@/utils/categoryUtils'

import {
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
  ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
} from '@/constants/paths'

function createSchemaForDirectory(directoryPath: string) {
  const categoryData = getCategoryDataFromDirectory(directoryPath)
  const { validCategoryOptions } = getCategorySettingsFromMap(categoryData)
  return createCategorySchema(validCategoryOptions)
}

export const CategorySchema = createSchemaForDirectory(
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
)

export const SubcategorySchema = createSchemaForDirectory(
  ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
)