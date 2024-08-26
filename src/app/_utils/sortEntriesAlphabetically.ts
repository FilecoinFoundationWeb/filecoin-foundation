import type { AlphabeticalSortId } from '@/types/sortTypes'

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
    const titleA = (a.title || '').toLowerCase()
    const titleB = (b.title || '').toLowerCase()

    return sortId === 'z-a'
      ? titleB.localeCompare(titleA)
      : titleA.localeCompare(titleB)
  })

  return sortedEntries
}
