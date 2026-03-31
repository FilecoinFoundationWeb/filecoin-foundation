import { sortPostsByDateDesc } from './sortBlogPosts'
import type { WithPublishedOn } from './types/withPublishedOnType'

type GetFeaturedPostsProps<Entry extends WithPublishedOn> = {
  posts: Array<Entry>
  limit: number
}

export function getFeaturedPosts<Entry extends WithPublishedOn>({
  posts,
  limit,
}: GetFeaturedPostsProps<Entry>) {
  return sortPostsByDateDesc(posts).slice(0, limit)
}
