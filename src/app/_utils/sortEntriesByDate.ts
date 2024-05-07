import {
  DEFAULT_SORT_OPTION,
  type SortOptionType,
} from '@/components/SortListbox'

type SortableByDate = {
  publishedOn?: string
  startDate?: string
}

type SortEntriesParams<T> = {
  entries: T[]
  sortOption: SortOptionType
  dateField: 'startDate' | 'publishedOn'
}

export function sortEntriesByDate<T extends SortableByDate>({
  entries,
  sortOption = DEFAULT_SORT_OPTION,
  dateField = 'publishedOn',
}: SortEntriesParams<T>): T[] {
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
