import { type EntryViewConfig } from '@filecoin-foundation/hooks/useEntryView/types'
import {
  sortPostsByDateAsc,
  sortPostsByDateDesc,
} from '@filecoin-foundation/utils/sortBlogPosts'

import { type MonthlyUpdate } from '../types/monthlyUpdateType'

export const entryViewConfigs = [
  {
    id: 'newest',
    name: 'Newest',
    filterOrSortFn: sortPostsByDateDesc,
  },
  {
    id: 'oldest',
    name: 'Oldest',
    filterOrSortFn: sortPostsByDateAsc,
  },
] as const satisfies ReadonlyArray<EntryViewConfig<MonthlyUpdate>>
