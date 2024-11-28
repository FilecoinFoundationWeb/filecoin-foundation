import {
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
  ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
} from '@/constants/paths'

import { getCategoryDataFromDirectory } from '@/utils/categoryUtils'

import type { EcosystemProject } from '../types/ecosystemProjectType'

type GetEcosystemCategoryLabelsProps = {
  category: EcosystemProject['category']
  subcategories: EcosystemProject['subcategories']
}

export function getEcosystemCategoryLabels({
  category,
  subcategories,
}: GetEcosystemCategoryLabelsProps) {
  const subcategoryData = getCategoryDataFromDirectory(
    ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
  )

  const categoryData = getCategoryDataFromDirectory(
    ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
  )

  return [
    categoryData[category],
    ...subcategories.map((subcategory) => subcategoryData[subcategory]),
  ]
}
