import type { BlogCategoryKey } from '../data/blogCategories'

export type BlogCategoryFilter = {
  selectedCategory: BlogCategoryKey
  setSelectedCategory: (category: BlogCategoryKey) => void
}
