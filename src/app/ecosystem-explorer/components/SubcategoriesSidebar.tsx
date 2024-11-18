import type { CategoriesAndSubcategoriesWithCount } from '../types/ecosystemCategoryType'

import { SubcategoryFilters } from './SubcategoryFilters'

type Props = {
  categories: CategoriesAndSubcategoriesWithCount
}

export function SubcategoriesSidebar({ categories }: Props) {
  return (
    <div className="w-full space-y-10 lg:max-w-72">
      {categories.map(({ slug, name, subcategories }) => (
        <SubcategoryFilters
          key={slug}
          categoryName={name}
          subcategories={subcategories}
        />
      ))}
    </div>
  )
}
