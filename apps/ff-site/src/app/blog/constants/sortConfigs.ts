import {
  sortPostsByDateAsc,
  sortPostsByDateDesc,
} from '@filecoin-foundation/utils/sortBlogPosts'

export const blogSortConfigs = [
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
