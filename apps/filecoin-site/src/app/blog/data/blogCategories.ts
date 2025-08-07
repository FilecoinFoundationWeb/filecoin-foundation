import type { AllowedCategory } from '../types/categoriesType'

export const DEFAULT_CATEGORY_KEY = 'all'

export type BlogCategoryKey = AllowedCategory | typeof DEFAULT_CATEGORY_KEY

type BlogCategory = {
  name: string
  id: BlogCategoryKey
}

export const blogCategories: Array<BlogCategory> = [
  {
    name: 'View All',
    id: DEFAULT_CATEGORY_KEY,
  },
  {
    name: 'Events',
    id: 'events',
  },
  {
    name: 'Interviews',
    id: 'interviews',
  },
  {
    name: 'Awards',
    id: 'awards',
  },
  {
    name: 'Updates',
    id: 'updates',
  },
]
