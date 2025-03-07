import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'
import { z } from 'zod'

type ZodObjectSchema = z.ZodObject<any, any, any, any, any>

export async function getBlogPostData(
  slug: string,
  directoryPath: string,
  zodSchema: ZodObjectSchema,
) {
  const data = await getBlogPostMarkdownData(slug, directoryPath, zodSchema)
  return transformBlogPostData(data)
}

export async function getBlogPostsData(
  directoryPath: string,
  zodSchema: ZodObjectSchema,
) {
  const allPosts = await getAllMarkdownData({
    directoryPath,
    zodSchema,
  })

  return allPosts.map(transformBlogPostData)
}

function getBlogPostMarkdownData(
  slug: string,
  directoryPath: string,
  zodSchema: ZodObjectSchema,
) {
  return getMarkdownData({
    slug,
    directoryPath,
    zodSchema,
  })
}

function transformBlogPostData(
  post: Awaited<ReturnType<typeof getBlogPostMarkdownData>>,
) {
  return {
    ...post,
    seo: {
      ...post.seo,
      title: post.seo.title || post.title,
    },
  }
}
