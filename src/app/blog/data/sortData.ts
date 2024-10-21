import { sortPostsByDateAsc, sortPostsByDateDesc } from '@/utils/sortBlogPosts'

export const blogSortData = [
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
