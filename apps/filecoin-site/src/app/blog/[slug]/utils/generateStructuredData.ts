import { PATHS } from '@/constants/paths'

import type { BlogPostTinaCMS } from '@/blog/types/blogPostType'
import { generateBlogPostStructuredData } from '@/blog/utils/generateBlogPostStructuredData'

export function generateStructuredData(data: BlogPostTinaCMS) {
  const { title, excerpt, image, date } = data
  return generateBlogPostStructuredData({
    path: `${PATHS.BLOG.path}/${data.slug}`,
    headline: title,
    description: excerpt,
    image: image?.url || undefined,
    datePublished: new Date(date),
    dateModified: new Date(date),
  })
}
