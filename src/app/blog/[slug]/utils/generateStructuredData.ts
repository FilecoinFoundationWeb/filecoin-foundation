import type { BlogPosting, WithContext } from 'schema-dts'

import { BlogPostData } from '@/types/blogPostTypes'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'
import {
  BASE_ORGANIZATION_SCHEMA,
  SCHEMA_CONTEXT_URL,
} from '@/constants/structuredDataConstants'

export function generateStructuredData(
  data: BlogPostData,
): WithContext<BlogPosting> {
  const { title, description, image, publishedOn, updatedOn, slug } = data

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: image.url,
    author: {
      '@type': 'Organization',
      name: ORGANIZATION_NAME,
      url: BASE_URL,
    },
    datePublished: publishedOn,
    dateModified: updatedOn || publishedOn,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${PATHS.BLOG.path}/${slug}`,
    },
    publisher: BASE_ORGANIZATION_SCHEMA,
  }
}
