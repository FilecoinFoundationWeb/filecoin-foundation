import {
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
  ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
} from '@/constants/paths'

import {
  getCategoryDataFromDirectory,
  getCategorySettingsFromMap,
} from '@/utils/categoryUtils'
import { createEnumSchema } from '@/utils/zodUtils'

function createSchemaForDirectory(directoryPath: string) {
  const categoryData = getCategoryDataFromDirectory(directoryPath)
  const { validCategoryIds } = getCategorySettingsFromMap(categoryData)
  return createEnumSchema(validCategoryIds)
}

export const CategorySchema = createSchemaForDirectory(
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
)

export const SubcategorySchema = createSchemaForDirectory(
  ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
)
