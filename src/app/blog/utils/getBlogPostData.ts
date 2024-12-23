import { PATHS } from '@/constants/paths'

import { getAllMarkdownData, getMarkdownData } from '@/utils/getMarkdownData'

import { BlogPostFrontMatterSchema } from '../schemas/FrontMatterSchema'

const BLOG_DIRECTORY_PATH = PATHS.BLOG.entriesContentPath as string

export function getBlogPostData(slug: string) {
  const data = getBlogPostMarkdownData(slug)
  return transformBlogPostData(data)
}

export function getBlogPostsData() {
  const allPosts = getAllMarkdownData({
    directoryPath: BLOG_DIRECTORY_PATH,
    zodParser: BlogPostFrontMatterSchema.parse,
  })

  return allPosts.map(transformBlogPostData)
}

function getBlogPostMarkdownData(slug: string) {
  return getMarkdownData({
    slug,
    directoryPath: BLOG_DIRECTORY_PATH,
    zodParser: BlogPostFrontMatterSchema.parse,
  })
}

function transformBlogPostData(
  post: ReturnType<typeof getBlogPostMarkdownData>,
) {
  return {
    ...post,
    seo: {
      ...post.seo,
      title: post.seo.title || post.title,
    },
  }
}
