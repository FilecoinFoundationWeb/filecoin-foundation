import { compareDesc } from 'date-fns'

import type { BlogPost } from '@/blog/types/blogPostType'
import { getBlogPostsData } from '@/blog/utils/getBlogPostData'

const MAX_FEATURED_POSTS = 6

export async function getFeaturedBlogPosts() {
  const blogPosts = await getBlogPostsData()
  const sortedBlogPosts = sortPostsByDateDesc(blogPosts)
  return sortedBlogPosts.slice(0, MAX_FEATURED_POSTS)
}

export function sortPostsByDateDesc(blogPosts: Array<BlogPost>) {
  return [...blogPosts].sort((a, b) => {
    const dateA = a.publishedOn
    const dateB = b.publishedOn

    return compareDesc(dateA, dateB)
  })
}
