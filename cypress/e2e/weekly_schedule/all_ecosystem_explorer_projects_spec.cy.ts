import {
  getCategoryDataFromDirectory,
  getCategorySettingsFromMap,
} from '@/utils/categoryUtils'

import {
  PATHS,
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
} from '../../../src/app/_constants/paths'
import { createCategoryTests } from '../../support/categoryUtils'

const categoryData = getCategoryDataFromDirectory(
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
)

const { validCategoryOptions } = getCategorySettingsFromMap(categoryData)

createCategoryTests({
  pathConfig: PATHS.ECOSYSTEM_EXPLORER,
  categories: validCategoryOptions,
  categoryType: 'category',
})
