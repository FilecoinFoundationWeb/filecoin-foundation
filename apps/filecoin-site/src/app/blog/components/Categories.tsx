import { Badge } from '@/components/Badge'

type CategoriesProps = {
  categories: string | Array<string>
}

export function Categories({ categories }: CategoriesProps) {
  const categoriesArray = Array.isArray(categories) ? categories : [categories]

  return (
    <div className="flex items-center gap-4 text-sm text-zinc-950">
      <span className="font-semibold">Categories:</span>
      <div className="flex flex-wrap gap-4">
        {categoriesArray.map((category) => (
          <Badge key={category}>{category}</Badge>
        ))}
      </div>
    </div>
  )
}
