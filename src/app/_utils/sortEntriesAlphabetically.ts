import { AlphabeticalSortId } from '@/types/sortTypes'

export function sortEntriesAlphabetically<
  Entry extends { [title: string]: any },
>({ entries, sortId }: { entries: Entry[]; sortId: AlphabeticalSortId }) {
  return [...entries].sort((a, b) => {
    const nameA = a['title']?.toString().toLowerCase() || ''
    const nameB = b['title']?.toString().toLowerCase() || ''

    switch (sortId) {
      case 'a-z':
        return nameA.localeCompare(nameB)
      case 'z-a':
        return nameB.localeCompare(nameA)
      default:
        return nameA.localeCompare(nameB)
    }
  })
}
