import { DEFAULT_FILTER_ID } from '@filecoin-foundation/hooks/useFilter/constants'

import type { AllowedCategory } from '../types/categoriesType'

export type BlogCategoryKey = AllowedCategory | typeof DEFAULT_FILTER_ID

type BlogCategory = {
  id: BlogCategoryKey
}

export const blogCategories = [
  { id: DEFAULT_FILTER_ID },
  { id: 'events' },
  { id: 'interviews' },
  { id: 'awards' },
  { id: 'updates' },
] as const satisfies Array<BlogCategory>
