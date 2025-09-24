import { PATHS } from '@/constants/paths'

import type { BlogPost } from '@/blog/types/blogPostType'
import { generateBlogPostStructuredData } from '@/blog/utils/generateBlogPostStructuredData'

export function generateStructuredData(data: BlogPost) {
  const { title, excerpt, image, publishedOn } = data
  return generateBlogPostStructuredData({
    path: `${PATHS.BLOG.path}/${data.slug}`,
    headline: title,
    description: excerpt,
    image: image?.url,
    datePublished: publishedOn,
    dateModified: publishedOn,
  })
}
