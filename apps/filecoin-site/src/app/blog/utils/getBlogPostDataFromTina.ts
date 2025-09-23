import type { BlogPostTinaCMS } from '../types/blogPostType'

import tinaClient from '@/tina/__generated__/client'
import type { Post } from '@/tina/__generated__/types'

export async function getBlogPostsDataFromTina(): Promise<BlogPostTinaCMS[]> {
  const posts = await getAllPostsFromTina()
  return posts.map(transformPost)
}

async function getAllPostsFromTina(): Promise<Post[]> {
  const { data } = await tinaClient.queries.postConnection()

  const edges = data?.postConnection?.edges ?? []

  return edges.flatMap((edge) => {
    const n = edge?.node
    return n && n.__typename === 'Post' ? [n as Post] : []
  })
}

function cleanSlug(filename: string) {
  return filename.replace(/\.(en|zh-cn)?\.md$/, '')
}

export function transformPost(post: Post): BlogPostTinaCMS {
  return {
    ...post,
    slug: cleanSlug(post._sys.filename),
    publishedOn: new Date(post.date),
    shareImage: post.share_image ?? undefined,
    seo: {
      description: post.excerpt,
    },
  }
}
