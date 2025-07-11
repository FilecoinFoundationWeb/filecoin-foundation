import { sortPostsByDateDesc } from './sortBlogPosts'

type GetFeaturedBlogPostsProps<Entry extends { date: Date }> = {
  posts: Array<Entry>
  limit: number
}

export function getFeaturedBlogPosts<Entry extends { date: Date }>({
  posts,
  limit,
}: GetFeaturedBlogPostsProps<Entry>) {
  return sortPostsByDateDesc(posts).slice(0, limit)
}
