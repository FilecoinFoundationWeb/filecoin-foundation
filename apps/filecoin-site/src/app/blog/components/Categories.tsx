import { Badge } from '@/components/Badge'

import type { AllowedCategory } from '../types/categoriesType'

export type CategoriesProps = {
  categories: AllowedCategory | Array<AllowedCategory>
}

export function Categories({ categories }: CategoriesProps) {
  const categoriesArray = Array.isArray(categories) ? categories : [categories]
  const label = categoriesArray.length > 1 ? 'Categories' : 'Category'

  return (
    <div className="flex items-center gap-4 text-sm">
      <span className="font-semibold">{label}:</span>
      <div className="flex flex-wrap gap-4">
        {categoriesArray.map((category) => (
          <Badge key={category}>{category}</Badge>
        ))}
      </div>
    </div>
  )
}
