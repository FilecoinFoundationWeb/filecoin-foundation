import { unstable_cache } from 'next/cache'

import { PATHS } from '@/constants/paths'

import { getMarkdownData } from '@/utils/getMarkdownData'

import { getAllMarkdownDataAsync } from '@/actions/getAllMarkdownDataAsync'

import { BlogPostFrontmatterSchema } from '../schemas/BlogPostFrontmatterSchema'

const BLOG_DIRECTORY_PATH = PATHS.BLOG.entriesContentPath as string

export function getBlogPostData(slug: string) {
  const data = getBlogPostMarkdownData(slug)
  return transformBlogPostData(data)
}

export const getBlogPostsData = unstable_cache(
  async () => {
    const allPosts = await getAllMarkdownDataAsync({
      directoryPath: BLOG_DIRECTORY_PATH,
      zodSchema: BlogPostFrontmatterSchema,
    })

    return allPosts.map(transformBlogPostData)
  },
  ['blog-posts'],
  { revalidate: false },
)

function getBlogPostMarkdownData(slug: string) {
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
