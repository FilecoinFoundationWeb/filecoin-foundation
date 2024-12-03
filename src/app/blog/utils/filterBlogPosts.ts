import type { BlogPost } from '@/blog/types/blogPostType'

export function blogPostMatchesCategoryQuery(
  blogPost: BlogPost,
  query?: string,
) {
  return blogPost.category === query
}
