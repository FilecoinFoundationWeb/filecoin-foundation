import { Badge } from '@/components/Badge'

import type { BlogPost } from '../types/blogPostType'

export type CategoriesProps = {
  categories: BlogPost['categories']
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
