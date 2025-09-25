import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'

import { PATHS } from '@/constants/paths'

import { BlogPostFrontmatterSchema } from '../schemas/BlogPostFrontmatterSchema'

const BLOG_DIRECTORY_PATH = PATHS.BLOG.entriesPath

export async function getBlogPostData(slug: string) {
  const data = await getBlogPostMarkdownData(slug)
  return transformBlogPostData(data)
}

export async function getBlogPostsData() {
  const allPosts = await getAllMarkdownData({
    directoryPath: BLOG_DIRECTORY_PATH,
    zodSchema: BlogPostFrontmatterSchema,
  })
  const englishPosts = allPosts.filter((post) => {
    return post.slug.includes('.en')
  })

  return englishPosts.map(transformBlogPostData)
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
  return {
    ...post,
    publishedOn: post.date,
    seo: {
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.excerpt,
    },
  }
}
