import type { DateSortOrder } from '@filecoin-foundation/utils/types/sortTypes'
import type { AnyObject } from '@filecoin-foundation/utils/types/utilTypes'

type SortKeys = 'upcoming-events' | 'past-events' | 'all-events' | 'a-z' | 'z-a'

export type SortConfig<Entry extends AnyObject> = {
  key: FFSortKey
  label: string
  sortFn: (entries: Array<Entry>) => Array<Entry>
}

export type FFSortKey = DateSortOrder | SortKeys
