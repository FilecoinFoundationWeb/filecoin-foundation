import { PATHS } from '@/constants/paths'

import { getAllMarkdownData, getMarkdownData } from '@/utils/getMarkdownData'

import { BlogPostFrontmatterSchema } from '../schemas/BlogPostFrontmatterSchema'

const BLOG_DIRECTORY_PATH = PATHS.BLOG.entriesContentPath as string

export function getBlogPostData(slug: string) {
  console.log('getBlogPostData', slug)
  const data = getBlogPostMarkdownData(slug)
  return transformBlogPostData(data)
}

export function getBlogPostsData() {
  console.log('getAllBlogPostsData')
  const allPosts = getAllMarkdownData({
    directoryPath: BLOG_DIRECTORY_PATH,
    zodParser: BlogPostFrontmatterSchema.parse,
  })

  return allPosts.map(transformBlogPostData)
}

function getBlogPostMarkdownData(slug: string) {
  console.log('getBlogPostMarkdownData', slug)
  return getMarkdownData({
    slug,
    directoryPath: BLOG_DIRECTORY_PATH,
    zodParser: BlogPostFrontmatterSchema.parse,
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
