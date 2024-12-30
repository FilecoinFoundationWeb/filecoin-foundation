import type { BlogPosting, WithContext } from 'schema-dts'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'
import {
  ORGANIZATION_SCHEMA_BASE,
  SCHEMA_CONTEXT_URL,
} from '@/constants/structuredDataConstants'

import type { BlogPost } from '../../types/blogPostType'

export function generateStructuredData(
  data: BlogPost,
): WithContext<BlogPosting> {
  const { title, description, image, publishedOn, updatedOn, slug } = data

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: image?.src,
    author: {
      '@type': 'Organization',
      name: ORGANIZATION_NAME,
      url: BASE_URL,
    },
    datePublished: publishedOn?.toISOString(),
    dateModified: updatedOn?.toISOString() || publishedOn?.toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${PATHS.BLOG.path}/${slug}`,
    },
    publisher: ORGANIZATION_SCHEMA_BASE,
  }
}
