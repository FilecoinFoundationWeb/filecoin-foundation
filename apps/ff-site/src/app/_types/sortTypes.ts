import type { SortType } from '@filecoin-foundation/utils/types/sortTypes'

type SortKeys = 'upcoming-events' | 'past-events' | 'all-events' | 'a-z' | 'z-a'

export type SortConfig<Entry extends Record<string, any>> = {
  key: FFSortKey
  label: string
  sortFn: (entries: Array<Entry>) => Array<Entry>
}

export type FFSortKey = SortType<SortKeys>
