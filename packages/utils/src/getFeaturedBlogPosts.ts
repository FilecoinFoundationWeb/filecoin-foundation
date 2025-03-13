import { sortPostsByDateAsc, sortPostsByDateDesc } from './sortBlogPosts'
import type { SortType } from './types/sortTypes'

type WithPublishedOn = {
  publishedOn: Date
}

type GetFeaturedBlogPostsProps<Entry extends WithPublishedOn> = {
  blogPosts: Array<Entry>
  sort: SortType<'newest' | 'oldest'>
  limit: number
}

export async function getFeaturedBlogPosts<Entry extends WithPublishedOn>({
  blogPosts,
  sort,
  limit = 4,
}: GetFeaturedBlogPostsProps<Entry>) {
  let sortedBlogPosts: Array<Entry>

  switch (sort) {
    case 'newest':
      sortedBlogPosts = sortPostsByDateDesc(blogPosts)
      break
    case 'oldest':
      sortedBlogPosts = sortPostsByDateAsc(blogPosts)
      break
  }
  return sortedBlogPosts.slice(0, limit)
}
