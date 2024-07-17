import {
  PATHS,
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
} from '../../../src/app/_constants/paths'
import {
  getCategoryDataFromDirectory,
  getCategorySettingsFromMap,
} from '../../../src/app/_utils/categoryUtils'
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
