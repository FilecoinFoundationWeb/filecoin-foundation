import { Badge } from '@filecoin-foundation/ui-filecoin/Badge'

export type CategoriesProps = {
  categories: string | Array<string>
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
