import { getBlogPostsData } from '@/blog/utils/getBlogPostData'
import { sortPostsByDateDesc } from '@/blog/utils/sortBlogPosts'

const MAX_FEATURED_POSTS = 4

export async function getFeaturedBlogPosts() {
  const blogPosts = await getBlogPostsData()
  const sortedBlogPosts = sortPostsByDateDesc(blogPosts)
  return sortedBlogPosts.slice(0, MAX_FEATURED_POSTS)
}
