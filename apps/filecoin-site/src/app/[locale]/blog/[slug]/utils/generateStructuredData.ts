import type { Locale } from '@/i18n/types'

import { PATHS } from '@/constants/paths'

import type { BlogPost } from '@/qino/collections/blogPosts'

import { generateBlogPostStructuredData } from '../../utils/generateBlogPostStructuredData'

export function generateStructuredData(data: BlogPost, locale: Locale) {
  const { title, excerpt, image, publishedOn } = data
  return generateBlogPostStructuredData({
    path: `${PATHS.BLOG.path}/${data._meta.slug}`,
    headline: title,
    description: excerpt,
    image: image ? image.url : undefined,
    datePublished: publishedOn,
    dateModified: publishedOn,
    locale,
  })
}
