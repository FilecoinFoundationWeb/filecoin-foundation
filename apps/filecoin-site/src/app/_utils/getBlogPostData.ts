import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'

import { PATHS } from '@/constants/paths'

import { BlogPostFrontmatterSchema } from '@/schemas/BlogPostFrontmatterSchema'

const BLOG_DIRECTORY_PATH = PATHS.BLOG.entriesPath

export async function getBlogPostData(slug: string) {
  const data = await getBlogPostMarkdownData(slug)
  return transformBlogPostData(data)
}

function getBlogPostMarkdownData(slug: string) {
  return getMarkdownData({
    slug,
    directoryPath: BLOG_DIRECTORY_PATH,
    zodSchema: BlogPostFrontmatterSchema,
  })
}

function transformBlogPostData(
  post: Awaited<ReturnType<typeof getBlogPostMarkdownData>>,
) {
  return post
}
