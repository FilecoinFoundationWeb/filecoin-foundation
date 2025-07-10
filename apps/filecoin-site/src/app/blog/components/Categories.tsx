type CategoriesProps = {
  categories: string | Array<string>
}

type TagProps = {
  children: string
}

export function Categories({ categories }: CategoriesProps) {
  const categoriesArray = Array.isArray(categories) ? categories : [categories]

  return (
    <div className="flex items-center gap-4 text-sm text-zinc-950">
      <span className="font-semibold">Categories:</span>
      <div className="flex flex-wrap gap-4">
        {categoriesArray.map((category) => (
          <Tag key={category}>{category}</Tag>
        ))}
      </div>
    </div>
  )
}

function Tag({ children }: TagProps) {
  return (
    <span className="border-brand-100 bg-brand-50 rounded-2xl border px-4 py-1 capitalize">
      {children}
    </span>
  )
}
