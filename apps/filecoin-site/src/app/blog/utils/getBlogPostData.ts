import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'

import { BLOG_DIRECTORY_PATH } from '@/constants/paths'

import { BlogPostFrontmatterSchema } from '../schemas/BlogPostFrontmatterSchema'
import type { BlogPost } from '../types/blogPostType'

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
    return post.slug.endsWith('.en') || post.slug.includes('.en.')
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

export function transformBlogPostData(post: any): BlogPost {
  const isTinaData = post._sys && post.body
  const isFileSystemData = post.content && post.slug

  return {
    title: post.title,
    excerpt: post.excerpt,
    date: new Date(post.date),
    publishedOn: new Date(post.date),
    slug: isTinaData ? cleanSlug(post._sys.filename) : cleanSlug(post.slug),
    categories: post.categories,
    author: post.author,
    image: post.image,
    shareImage: post.share_image || post.shareImage,
    seo: {
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.excerpt,
    },
    ...(isFileSystemData && { content: post.content }),
    ...(isTinaData && { body: post.body }),
  }
}

function cleanSlug(filename: string) {
  return filename.replace(/\.(en|zh-cn)$/, '')
}
