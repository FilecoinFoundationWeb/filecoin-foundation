import { type SortableByDate, type SortId } from '@/types/sortTypes'

type SortEntriesByDateParams<Entry extends SortableByDate> = {
  entries: Entry[]
  sortBy: keyof SortableByDate
  sortId: SortId
}

export function sortEntriesByDate<Entry extends SortableByDate>({
  entries,
  sortBy,
  sortId,
}: SortEntriesByDateParams<Entry>) {
  return [...entries].sort((a, b) => {
    const dateA = (a[sortBy] as Date).valueOf()
    const dateB = (b[sortBy] as Date).valueOf()

    switch (sortId) {
      case 'newest':
        return dateB - dateA
      case 'oldest':
        return dateA - dateB
      default:
        return 0
    }
  })
}
