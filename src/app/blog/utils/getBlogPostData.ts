import { PATHS } from '@/constants/paths'

import { getAllMarkdownData, getMarkdownData } from '@/utils/getMarkdownData'

import { BlogPostFrontMatterSchema } from '@/blog/schemas/FrontMatterSchema'

const BLOG_DIRECTORY_PATH = PATHS.BLOG.entriesContentPath as string

export function getBlogPostData(slug: string) {
  return getMarkdownData({
    slug,
    directoryPath: BLOG_DIRECTORY_PATH,
    zodParser: BlogPostFrontMatterSchema.parse,
  })
}

export function getBlogPostsData() {
  return getAllMarkdownData({
    directoryPath: BLOG_DIRECTORY_PATH,
    zodParser: BlogPostFrontMatterSchema.parse,
  })
}
