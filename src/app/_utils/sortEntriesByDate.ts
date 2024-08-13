import { type SortableByDate, type SortOption } from '@/types/sortTypes'

type SortEntriesByDateParams<Entry extends SortableByDate> = {
  entries: Entry[]
  sortBy: keyof SortableByDate
  sortOption: SortOption
}

function validateDate(value?: string) {
  if (!value) {
    return new Date(0)
  }

  const date = new Date(value)
  const isInvalidDate = Number.isNaN(date.getTime())
  return isInvalidDate ? new Date(0) : date
}

export function sortEntriesByDate<Entry extends SortableByDate>({
  entries,
  sortBy,
  sortOption,
}: SortEntriesByDateParams<Entry>) {
  return [...entries].sort((a, b) => {
    const dateA = validateDate(a[sortBy])
    const dateB = validateDate(b[sortBy])

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
