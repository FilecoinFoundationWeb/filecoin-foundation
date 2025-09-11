import { PATHS } from '@/constants/paths'

import type { BlogPostTinaCMS } from '@/blog/types/blogPostType'
import { generateBlogPostStructuredData } from '@/blog/utils/generateBlogPostStructuredData'

export function generateStructuredData(data: BlogPostTinaCMS) {
  const { title, excerpt, image, publishedOn } = data
  return generateBlogPostStructuredData({
    path: `${PATHS.BLOG.path}/${data.slug}`,
    headline: title,
    description: excerpt,
    image: image?.url || undefined,
    datePublished: publishedOn,
    dateModified: publishedOn,
  })
}
