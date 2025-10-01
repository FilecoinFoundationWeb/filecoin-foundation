import { CategoryFilter } from './CategoryFilter'
import { CategoryListbox } from './CategoryListbox'

export function BlogCategoryFilter() {
  return (
    <>
      <div className="hidden lg:block">
        <CategoryFilter />
      </div>

      <div className="block min-w-48 lg:hidden">
        <CategoryListbox />
      </div>
    </>
  )
}
