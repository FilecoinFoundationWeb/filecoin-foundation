import { Badge } from '@/components/Badge'

import type { AllowedCategory } from '../types/categoriesType'

export type CategoriesProps = {
  categories: AllowedCategory | Array<AllowedCategory>
}

export function Categories({ categories }: CategoriesProps) {
  const categoriesArray = Array.isArray(categories) ? categories : [categories]

  return (
    <div className="flex flex-wrap items-baseline gap-4">
      {categoriesArray.map((category) => (
        <Badge key={category}>{category}</Badge>
      ))}
    </div>
  )
}
