import { type BlogPostData } from '@/types/blogPostTypes'

import { getCategoryLabelGeneric } from '@/utils/getCategoryLabelGeneric'

export function getCategoryLabel(category: BlogPostData['category']) {
  return getCategoryLabelGeneric<BlogPostData>({
    collectionName: 'blog',
    fieldName: 'category',
    category,
  })
}
