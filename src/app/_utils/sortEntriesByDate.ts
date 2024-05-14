import { type SortableByDate, type SortEntriesParams } from '@/types/sortTypes'

import {
  DEFAULT_SORT_OPTION,
  VALID_SORT_OPTIONS,
} from '@/constants/sortConstants'

export function sortEntriesByDate<T extends SortableByDate>({
  entries,
  dateField = 'publishedOn',
  sortOption = DEFAULT_SORT_OPTION,
}: SortEntriesParams<T>): T[] {
  if (!VALID_SORT_OPTIONS.includes(sortOption)) {
    sortOption = DEFAULT_SORT_OPTION
  }

  return [...entries].sort((a, b) => {
    const dateA = new Date(a[dateField] || 0)
    const dateB = new Date(b[dateField] || 0)

    switch (sortOption) {
      case 'newest':
        return dateB.valueOf() - dateA.valueOf()
      case 'oldest':
        return dateA.valueOf() - dateB.valueOf()
      default:
        return 0
    }
  })
}
