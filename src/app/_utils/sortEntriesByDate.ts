import { SortType } from '@/components/SortListbox'

interface SortableByDate {
  startDate: string
}

export function sortEntriesByDate<T extends SortableByDate>(
  entries: T[],
  sortType: SortType,
): T[] {
  return entries.slice().sort((a, b) => {
    const dateA = new Date(a.startDate)
    const dateB = new Date(b.startDate)

    switch (sortType) {
      case SortType.Newest:
        return dateB.valueOf() - dateA.valueOf()
      case SortType.Oldest:
        return dateA.valueOf() - dateB.valueOf()
      default:
        return 0
    }
  })
}
