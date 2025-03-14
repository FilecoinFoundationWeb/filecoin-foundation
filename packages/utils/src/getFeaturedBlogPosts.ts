import { sortPostsByDateDesc } from './sortBlogPosts'
import type { WithPublishedOn } from './types/withPublishedOnType'

type GetFeaturedBlogPostsProps<Entry extends WithPublishedOn> = {
  posts: Array<Entry>
  limit: number
}

export async function getFeaturedBlogPosts<Entry extends WithPublishedOn>({
  posts,
  limit,
}: GetFeaturedBlogPostsProps<Entry>) {
  return sortPostsByDateDesc(posts).slice(0, limit)
}
