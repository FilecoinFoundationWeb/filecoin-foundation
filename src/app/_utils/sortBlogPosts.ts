import { compareAsc, compareDesc } from 'date-fns'

import type { BlogPost } from '@/types/blogPostType'
import type { ValidSortKey } from '@/types/sortTypes'

export function sortPostsByDateDesc(blogPosts: Array<BlogPost>) {
  return sortPostsByDate(blogPosts, 'newest')
}

export function sortPostsByDateAsc(blogPosts: Array<BlogPost>) {
  return sortPostsByDate(blogPosts, 'oldest')
}

function sortPostsByDate(
  blogPosts: Array<BlogPost>,
  sortBy: Extract<ValidSortKey, 'newest' | 'oldest'>,
) {
  return [...blogPosts].sort((a, b) => {
    const dateA = a.publishedOn || new Date()
    const dateB = b.publishedOn || new Date()

    switch (sortBy) {
      case 'newest':
        return compareDesc(dateA, dateB)
      case 'oldest':
        return compareAsc(dateA, dateB)
      default:
        return 0
    }
  })
}
