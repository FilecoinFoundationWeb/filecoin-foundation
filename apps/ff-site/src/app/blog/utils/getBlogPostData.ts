import { blogPostCollection } from '@/qino/collections/blogPosts'

import { assertEntryExists } from '@/utils/assertEntryExists'
import { camelcaseEntry } from '@/utils/camelcaseEntry'

type BlogPostEntry = Awaited<ReturnType<typeof blogPostCollection.getEntry>>

export async function getBlogPostData(slug: string) {
  await assertEntryExists(blogPostCollection, slug)
  const post = await blogPostCollection.getEntry(slug)
  return transformBlogPostData(post)
}

export async function getBlogPostsData() {
  const posts = await blogPostCollection.getEntries()
  return posts.map(transformBlogPostData)
}

function transformBlogPostData(entry: BlogPostEntry) {
  const post = camelcaseEntry(entry)

  return {
    ...post,
    seo: {
      ...post.seo,
      title: post.seo.title || post.title,
    },
  }
}
