import type { CategoryId } from '@/types/categoryTypes'

import type { BlogPost } from '../types/blogPostType'

export function filterBlogPostsByCategory(
  blogPost: BlogPost,
  categoryId?: CategoryId,
) {
  return blogPost.category === categoryId
}
