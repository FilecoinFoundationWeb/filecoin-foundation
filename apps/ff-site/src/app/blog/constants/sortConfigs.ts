import { type SortConfig } from '@filecoin-foundation/hooks/useSort/types'
import {
  sortPostsByDateAsc,
  sortPostsByDateDesc,
} from '@filecoin-foundation/utils/sortBlogPosts'

import { type BlogPost } from '../types/blogPostType'

export const blogSortConfigs = [
  {
    id: 'newest',
    name: 'Newest',
    sortFn: sortPostsByDateDesc,
  },
  {
    id: 'oldest',
    name: 'Oldest',
    sortFn: sortPostsByDateAsc,
  },
] as const satisfies ReadonlyArray<SortConfig<BlogPost>>
