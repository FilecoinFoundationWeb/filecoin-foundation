import {
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
  ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
} from '@/constants/paths'

import { getCategoryDataFromDirectory } from '@/utils/categoryUtils'

import type { Category, Subcategory } from '../schemas/CategorySchemas'

type GetEcosystemTagLabelsProps = {
  category: Category
  subcategories?: Array<Subcategory>
}

export function getEcosystemTagLabels({
  category,
  subcategories,
}: GetEcosystemTagLabelsProps) {
  const subcategoryData = getCategoryDataFromDirectory(
    ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
  )

  const categoryData = getCategoryDataFromDirectory(
    ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
  )

  const tagLabel = [
    categoryData[category],
    ...(subcategories
      ? subcategories.map((subcategory) => subcategoryData[subcategory])
      : []),
  ]

  return tagLabel
}
