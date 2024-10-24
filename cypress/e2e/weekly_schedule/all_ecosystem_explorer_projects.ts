import { ECOSYSTEM_CATEGORIES_DIRECTORY_PATH, PATHS } from '@/constants/paths'

import {
  getCategoryDataFromDirectory,
  getCategorySettingsFromMap,
} from '@/utils/categoryUtils'

import { createCategoryTests } from '@/support/categoryUtils'

const categoryData = getCategoryDataFromDirectory(
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
)

const { validCategoryIds } = getCategorySettingsFromMap(categoryData)

createCategoryTests({
  pathConfig: PATHS.ECOSYSTEM_EXPLORER,
  categories: validCategoryIds,
})
