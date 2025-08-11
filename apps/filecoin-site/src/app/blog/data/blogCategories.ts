import { DEFAULT_FILTER_ID } from '@filecoin-foundation/hooks/useFilter/constants'

import type { AllowedCategory } from '../types/categoriesType'

export type BlogCategoryKey = AllowedCategory | typeof DEFAULT_FILTER_ID

type BlogCategory = {
  name: string
  id: BlogCategoryKey
}

export const blogCategories: Array<BlogCategory> = [
  {
    name: 'View All',
    id: DEFAULT_FILTER_ID,
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
