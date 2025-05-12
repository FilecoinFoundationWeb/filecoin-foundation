import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'

import { PATHS } from '@/constants/paths'

import { BlogPostFrontmatterSchema } from '../schemas/BlogPostFrontmatterSchema'

const BLOG_DIRECTORY_PATH = PATHS.BLOG.entriesContentPath as string

type RawBlogPost = Awaited<
  ReturnType<typeof getMarkdownData<typeof BlogPostFrontmatterSchema.shape>>
>
export type BlogPostData = Awaited<ReturnType<typeof transformBlogPostData>>

const isDev = process.env.NODE_ENV === 'development'

let cachedPosts: BlogPostData[] | null = null

export async function getBlogPostData(slug: string) {
  const posts = await getBlogPostsData()
  const post = posts.find((post) => post.slug === slug)

  if (!post) {
    throw new Error(`Blog post with slug "${slug}" not found`)
  }

  return post
}

export async function getBlogPostsData() {
  if (!isDev && cachedPosts) {
    return cachedPosts
  }

  const posts = await getAllMarkdownData({
    directoryPath: BLOG_DIRECTORY_PATH,
    zodSchema: BlogPostFrontmatterSchema,
  })

  cachedPosts = posts.map(transformBlogPostData)
  return cachedPosts
}

function transformBlogPostData(post: RawBlogPost) {
  return {
    ...post,
    seo: {
      ...post.seo,
      title: post.seo.title || post.title,
    },
  }
}
