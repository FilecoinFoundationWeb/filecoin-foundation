import type { CategoryId } from '@/types/categoryTypes'

import type { BlogPost } from '../types/blogPostType'

export function filterBlogPostsByCategory(
  blogPosts: Array<BlogPost>,
  categoryId?: CategoryId,
) {
  return blogPosts.filter((blogPost) => blogPost.category === categoryId)
}
