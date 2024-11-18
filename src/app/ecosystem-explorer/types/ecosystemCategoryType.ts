import type { useEcosystemCategory } from '../hooks/useEcosystemCategory'

export type CategoriesAndSubcategoriesWithCount = ReturnType<
  typeof useEcosystemCategory
>['categoriesWithSubcategories']

export type SubcategoriesWithCount =
  CategoriesAndSubcategoriesWithCount[number]['subcategories']
