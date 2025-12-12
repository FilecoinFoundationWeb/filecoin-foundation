import { CategoryFilter } from './CategoryFilter'
import { CategoryListbox } from './CategoryListbox'

export function BlogCategoryFilter() {
  return (
    <>
      <div className="hidden lg:block">
        <CategoryFilter />
      </div>

      <div className="block lg:hidden">
        <CategoryListbox />
      </div>
    </>
  )
}
