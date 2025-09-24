import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'

import { BLOG_DIRECTORY_PATH } from '@/constants/paths'

import { BlogPostFrontmatterSchema } from '../schemas/BlogPostFrontmatterSchema'
import type { BlogPost } from '../types/blogPostType'

import type { PostQuery } from '@/tina/__generated__/types'

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

export function transformBlogPostData(
  post: Awaited<ReturnType<typeof getBlogPostMarkdownData>> | PostQuery['post'],
): BlogPost {
  if ('_sys' in post) {
    return {
      title: post.title,
      excerpt: post.excerpt,
      publishedOn: new Date(post.date),
      slug: cleanSlug(post._sys.filename),
      categories: post.categories as BlogPost['categories'],
      author: post.author ? post.author : undefined,
      image: post.image?.url
        ? {
            url: post.image.url,
            alt: post.image.alt ? post.image.alt : undefined,
          }
        : undefined,
      shareImage: post.share_image ? post.share_image : undefined,
      content: post.body,
      seo: {
        title: post.title,
        description: post.seo?.description || post.excerpt,
      },
    }
  }

  return {
    title: post.title,
    excerpt: post.excerpt,
    publishedOn: new Date(post.date),
    slug: cleanSlug(post.slug),
    categories: post.categories,
    author: post.author,
    image: post.image,
    shareImage: post.shareImage,
    content: post.content,
    seo: {
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.excerpt,
    },
  }
}

function cleanSlug(filename: string) {
  return filename.replace(/\.(en|zh-cn)$/, '')
}
