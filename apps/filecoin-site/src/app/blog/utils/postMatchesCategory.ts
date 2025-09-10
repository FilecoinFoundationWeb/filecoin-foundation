import { DEFAULT_FILTER_ID } from '@filecoin-foundation/hooks/useFilter/constants'

import type { BlogCategoryKey } from '../data/blogCategories'
import type { BlogPostTinaCMS } from '../types/blogPostType'

export function postMatchesCategory(
  post: BlogPostTinaCMS,
  category: BlogCategoryKey,
) {
  if (category === DEFAULT_FILTER_ID) {
    return true
  }

  return post.categories.includes(category)
}
