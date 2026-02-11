import { DEFAULT_FILTER_ID } from '@filecoin-foundation/hooks/useFilter/constants'

import type { BlogCategoryKey } from '../data/blogCategories'
import type { BlogPostPreview } from '../types/blogPostType'

export function postMatchesCategory(
  post: BlogPostPreview,
  category: BlogCategoryKey,
) {
  if (category === DEFAULT_FILTER_ID) {
    return true
  }

  return post.categories.includes(category)
}
