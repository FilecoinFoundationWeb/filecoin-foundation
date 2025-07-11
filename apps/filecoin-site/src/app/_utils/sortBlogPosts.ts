import { compareAsc, compareDesc } from 'date-fns'

import type { DateSortOrder } from '@filecoin-foundation/utils/types/sortTypes'

export function sortPostsByDateDesc<Entry extends { date: Date }>(
  posts: Array<Entry>,
) {
  return sortPostsByDate(posts, 'newest')
}

function sortPostsByDate<Entry extends { date: Date }>(
  posts: Array<Entry>,
  sortBy: DateSortOrder,
) {
  return posts.toSorted((a, b) => {
    const dateA = a.date
    const dateB = b.date

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
