import {
  sortPostsByDateAsc,
  sortPostsByDateDesc,
} from '@/blog/utils/sortBlogPosts'

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
