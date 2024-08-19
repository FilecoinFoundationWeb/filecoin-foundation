import { SortOptionAlphabetical } from '@/types/sortTypes'

export function sortEntriesAlphabetically<
  Entry extends { [title: string]: any },
>({
  entries,
  sortOption,
}: {
  entries: Entry[]
  sortOption: SortOptionAlphabetical
}) {
  return [...entries].sort((a, b) => {
    const nameA = a['title']?.toString().toLowerCase() || ''
    const nameB = b['title']?.toString().toLowerCase() || ''

    switch (sortOption) {
      case 'a-z':
        return nameA.localeCompare(nameB)
      case 'z-a':
        return nameB.localeCompare(nameA)
      default:
        return nameA.localeCompare(nameB)
    }
  })
}
