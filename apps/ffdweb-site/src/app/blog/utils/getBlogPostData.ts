import { getBlogPostData as sharedGetBlogPostData } from '@filecoin-foundation/utils/getBlogPostData'
import { getBlogPostsData as sharedGetBlogPostsData } from '@filecoin-foundation/utils/getBlogPostData'

import { PATHS } from '@/constants/paths'

import { BlogPostFrontmatterSchema } from '../schemas/BlogPostFrontmatterSchema'

const BLOG_DIRECTORY_PATH = PATHS.BLOG.entriesContentPath as string

export async function getBlogPostData(slug: string) {
  return sharedGetBlogPostData(
    slug,
    BLOG_DIRECTORY_PATH,
    BlogPostFrontmatterSchema,
  )
}

export async function getBlogPostsData() {
  return sharedGetBlogPostsData(BLOG_DIRECTORY_PATH, BlogPostFrontmatterSchema)
}
