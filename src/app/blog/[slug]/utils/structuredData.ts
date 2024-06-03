import type { BlogPosting, WithContext } from 'schema-dts'

import { BlogPostData } from '@/types/blogPostTypes'

import {
  SCHEMA_CONTEXT_URL,
  baseOrganizationSchema,
} from '@/utils/baseStructuredData'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'

export const generateBlogPostStructuredData = (
  data: BlogPostData,
): WithContext<BlogPosting> => {
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
    },
    datePublished: publishedOn,
    dateModified: updatedOn || publishedOn,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${PATHS.BLOG.path}/${slug}`,
    },
    ...(typeof baseOrganizationSchema === 'object'
      ? { publisher: baseOrganizationSchema }
      : {}),
  }
}
