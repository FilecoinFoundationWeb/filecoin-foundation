import { type SortableByDate, type SortOption } from '@/types/sortTypes'

type SortEntriesByDateParams<Entry extends SortableByDate> = {
  entries: Array<Entry>
  sortBy: keyof SortableByDate
  sortOption: SortOption
}

export function sortEntriesByDate<Entry extends SortableByDate>({
  entries,
  sortBy,
  sortOption,
}: SortEntriesByDateParams<Entry>) {
  return [...entries].sort((a, b) => {
    const dateA = (a[sortBy] as Date).valueOf()
    const dateB = (b[sortBy] as Date).valueOf()

    switch (sortOption) {
      case 'newest':
        return dateB - dateA
      case 'oldest':
        return dateA - dateB
      default:
        return 0
    }
  })
}
