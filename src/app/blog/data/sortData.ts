import type { BlogPost } from '@/types/blogPostType'
import type { SortConfig } from '@/types/sortTypes'

import { sortPostsByDateAsc, sortPostsByDateDesc } from '@/utils/sortBlogPosts'

export const blogSortData: ReadonlyArray<SortConfig<BlogPost>> = [
  {
    key: 'newest',
    label: 'Newest',
    sortFn: sortPostsByDateDesc,
  },
  {
    key: 'oldest',
    label: 'Oldest',
    sortFn: sortPostsByDateAsc,
  },
] as const
