import type { BlogPost } from '../../types/blogPostType'
import { generateBlogPostStructuredData } from '../../utils/generateBlogPostStructuredData'

export function generateStructuredData(data: BlogPost) {
  const { title, excerpt, image, publishedOn } = data
  return generateBlogPostStructuredData({
    path: `/blog/${data.slug}`,
    headline: title,
    description: excerpt,
    image: image ? image.url : undefined,
    datePublished: publishedOn,
    dateModified: publishedOn,
  })
}
