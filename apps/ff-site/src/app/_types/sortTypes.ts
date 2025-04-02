import type { DateSortOrder } from '@filecoin-foundation/utils/types/sortTypes'

type SortKeys = 'upcoming-events' | 'past-events' | 'all-events' | 'a-z' | 'z-a'

export type FFSortKey = DateSortOrder | SortKeys
