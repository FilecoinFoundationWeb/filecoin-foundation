import type { useEcosystemCategoryTree } from '../hooks/useEcosystemCategoryTree'

export type CategoriesAndSubcategoriesWithCount = ReturnType<
  typeof useEcosystemCategoryTree
>

export type SubcategoriesWithCount =
  CategoriesAndSubcategoriesWithCount[number]['subcategories']
