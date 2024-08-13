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
    const dateA = validateDate(
      typeof a[sortBy] === 'undefined'
        ? ''
        : a[sortBy] instanceof Date
          ? a[sortBy].toISOString()
          : a[sortBy],
    )
    const dateB = validateDate(
      typeof b[sortBy] === 'undefined'
        ? ''
        : b[sortBy] instanceof Date
          ? b[sortBy].toISOString()
          : b[sortBy],
    )

    const timeA = dateA.valueOf()
    const timeB = dateB.valueOf()

    switch (sortOption) {
      case 'newest':
        return timeB - timeA
      case 'oldest':
        return timeA - timeB
      default:
        return 0
    }
  })
}
