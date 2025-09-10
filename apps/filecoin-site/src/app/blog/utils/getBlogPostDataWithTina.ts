import type { BlogPostTinaCMS } from '../types/blogPostType'

import tinaClient from '@/tina/__generated__/client'

export async function getBlogPostsDataWithTina() {
  const result = await tinaClient.queries.postConnection()

  return (result.data.postConnection.edges
    ?.map((edge) => edge?.node)
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .map((post) => ({
      ...post,
      slug: post._sys.filename.replace('.md', ''),
      seo: {
        title: post.title,
        description: post.excerpt,
      },
    })) ?? []) as Array<BlogPostTinaCMS>
}

export async function getBlogPostDataWithTina(slug: string) {
  const result = await tinaClient.queries.post({
    relativePath: `${slug}.md`,
  })

  return {
    ...result.data.post,
    slug: result.data.post._sys.filename.replace('.md', ''),
    seo: {
      title: result.data.post.title,
      description: result.data.post.excerpt,
    },
  } as BlogPostTinaCMS
}
