import { getBlogPostsData } from '@/blog/utils/getBlogPostData'
import { sortPostsByDateDesc } from '@/blog/utils/sortBlogPosts'

const MAX_FEATURED_POSTS = 4

export function getFeaturedBlogPosts() {
  const blogPosts = getBlogPostsData()
  const sortedBlogPosts = sortPostsByDateDesc(blogPosts)
  const featuredBlogPosts = sortedBlogPosts.slice(0, MAX_FEATURED_POSTS)

  return {
    featuredBlogPosts,
    hasFeaturedBlogPosts: featuredBlogPosts.length > 0,
  }
}
