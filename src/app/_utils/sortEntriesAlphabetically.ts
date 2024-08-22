import { AlphabeticalSortId } from '@/types/sortTypes'

type SortEntriesParams<Entry> = {
  entries: Entry[]
  sortId: AlphabeticalSortId
}

type EntryWithTitle = { title?: string }

export function sortEntriesAlphabetically<Entry extends EntryWithTitle>({
  entries,
  sortId,
}: SortEntriesParams<Entry>): Entry[] {
  const sortedEntries = [...entries].sort((a, b) => {
    const nameA = (a.title || '').toLowerCase()
    const nameB = (b.title || '').toLowerCase()

    return sortId === 'z-a'
      ? nameB.localeCompare(nameA)
      : nameA.localeCompare(nameB)
  })

  return sortedEntries
}
