import { compareAsc, compareDesc } from 'date-fns'
import type { DateSortOrder } from './types/sortTypes'
import type { WithPublishedOn } from './types/withPublishedOnType'

export function sortPostsByDateDesc<Entry extends WithPublishedOn>(
  posts: Array<Entry>,
) {
  return sortPostsByDate(posts, 'newest')
}

export function sortPostsByDateAsc<Entry extends WithPublishedOn>(
  posts: Array<Entry>,
) {
  return sortPostsByDate(posts, 'oldest')
}

function sortPostsByDate<Entry extends WithPublishedOn>(
  posts: Array<Entry>,
  sortBy: DateSortOrder,
) {
  return posts.toSorted((a, b) => {
    const dateA = a.publishedOn
    const dateB = b.publishedOn

    switch (sortBy) {
      case 'newest':
        return compareDesc(dateA, dateB)
      case 'oldest':
        return compareAsc(dateA, dateB)
      default:
        return 0
    }
  })
}
