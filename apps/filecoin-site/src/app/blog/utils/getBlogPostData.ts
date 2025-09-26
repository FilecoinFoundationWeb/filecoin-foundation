import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'

import { PATHS } from '@/constants/paths'

import { BlogPostFrontmatterSchema } from '../schemas/BlogPostFrontmatterSchema'

type Locale = 'en' | 'zh-CN'

export async function getBlogPostData(slug: string, locale: Locale) {
  const data = await getBlogPostMarkdownData(slug, locale)
  return transformBlogPostData(data)
}

export async function getBlogPostsData(locale: Locale) {
  const allPosts = await getAllMarkdownData({
    directoryPath: getDirectoryPathForLocale(locale),
    zodSchema: BlogPostFrontmatterSchema,
  })

  return allPosts.map(transformBlogPostData)
}

function getBlogPostMarkdownData(slug: string, locale: Locale) {
  return getMarkdownData({
    slug,
    directoryPath: getDirectoryPathForLocale(locale),
    zodSchema: BlogPostFrontmatterSchema,
  })
}

function transformBlogPostData(
  post: Awaited<ReturnType<typeof getBlogPostMarkdownData>>,
) {
  return {
    ...post,
    publishedOn: post.date,
    seo: {
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.excerpt,
    },
  }
}

function getDirectoryPathForLocale(locale: Locale) {
  return PATHS.BLOG.entriesPath + `/${locale}`
}
