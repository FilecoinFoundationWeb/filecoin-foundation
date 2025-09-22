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
  const result = await tinaClient.queries.post({
    relativePath: `${slug}.{en,zh-cn}.md`,
  })

  return {
    ...result.data.post,
    slug: result.data.post._sys.filename.replace(/\.(en|zh-cn)?\.md$/, ''),
    publishedOn: new Date(result.data.post.date),
    shareImage: result.data.post.share_image,
    seo: {
      description: result.data.post.excerpt,
    },
  } as BlogPostTinaCMS
}
