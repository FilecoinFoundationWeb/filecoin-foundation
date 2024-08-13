import { SortOption } from '@/types/sortTypes'

export function sortEntriesAlphabetically<
  Entry extends { [title: string]: any },
>({ entries, sortOption }: { entries: Entry[]; sortOption: SortOption }) {
  return [...entries].sort((a, b) => {
    const nameA = a['title']?.toString().toLowerCase() || ''
    const nameB = b['title']?.toString().toLowerCase() || ''

    if (sortOption === 'a-z') {
      return nameA.localeCompare(nameB)
    } else if (sortOption === 'z-a') {
      return nameB.localeCompare(nameA)
    }
    return ''
  })
}
