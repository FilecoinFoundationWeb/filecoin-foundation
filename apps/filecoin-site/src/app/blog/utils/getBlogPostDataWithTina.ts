import type { BlogPostTinaCMS } from '../types/blogPostType'

import tinaClient from '@/tina/__generated__/client'

export async function getBlogPostsDataWithTina() {
  const result = await tinaClient.queries.postConnection()

  return (result.data.postConnection.edges
    ?.map((edge) => edge?.node)
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .map((post) => ({
      ...post,
      slug: post._sys.filename.replace(/\.(en|zh-cn)\.md$/, ''),
      publishedOn: new Date(post.date),
      shareImage: post.share_image,
      seo: {
        description: post.excerpt,
      },
    })) ?? []) as Array<BlogPostTinaCMS>
}

export async function getBlogPostDataWithTina(slug: string) {
  const allPosts = await tinaClient.queries.postConnection()
  const targetPost = allPosts.data.postConnection.edges?.find((edge) => {
    const filename = edge?.node?._sys.filename || ''
    const cleanSlug = filename.replace(/\.(en|zh-cn)?\.md$/, '')
    return cleanSlug === slug
  })?.node

  if (!targetPost) {
    throw new Error(`Post with slug "${slug}" not found`)
  }

  return {
    ...targetPost,
    slug: targetPost._sys.filename.replace(/\.(en|zh-cn)?\.md$/, ''),
    publishedOn: new Date(targetPost.date),
    shareImage: targetPost.share_image,
    seo: {
      description: targetPost.excerpt,
    },
  } as BlogPostTinaCMS
}
