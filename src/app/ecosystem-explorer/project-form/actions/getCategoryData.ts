'use server'

import {
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
  ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
} from '@/constants/paths'

import { getCategoryDataFromDirectory } from '@/utils/categoryUtils'

const categoryData = getCategoryDataFromDirectory(
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
)

const subCategoryData = getCategoryDataFromDirectory(
  ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
)

export async function getCategoryData() {
  return { categoryData, subCategoryData }
}
