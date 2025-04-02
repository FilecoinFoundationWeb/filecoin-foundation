import { type EntryViewConfig } from '@filecoin-foundation/hooks/useEntryView/types'
import {
  sortPostsByDateAsc,
  sortPostsByDateDesc,
} from '@filecoin-foundation/utils/sortBlogPosts'

import { type BlogPost } from '../types/blogPostType'

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
] as const satisfies ReadonlyArray<EntryViewConfig<BlogPost>>
