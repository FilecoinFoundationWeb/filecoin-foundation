import type { useEcosystemCategory } from '../hooks/useEcosystemCategory'

export type CategoriesAndSubcategoriesWithCount = ReturnType<
  typeof useEcosystemCategory
>['categoryTree']

export type SubcategoriesWithCount =
  CategoriesAndSubcategoriesWithCount[number]['subcategories']
