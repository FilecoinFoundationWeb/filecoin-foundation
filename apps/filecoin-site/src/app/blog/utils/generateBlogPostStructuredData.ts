import type { BlogPosting } from 'schema-dts'

import type { BlogPostPageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'

import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'

import { generateBreadcrumbList } from '@/utils/generateBreadcrumbsList'

type GenerateBlogPostStructuredDataProps = {
  path: string
  headline: string
  description: BlogPosting['description']
  image: BlogPosting['image']
  datePublished: Date
  dateModified?: Date
  publisherId?: string
}

export function generateBlogPostStructuredData({
  path,
  headline,
  description,
  image,
  datePublished,
  dateModified,
  publisherId = `${BASE_URL}/#org`,
}: GenerateBlogPostStructuredDataProps): BlogPostPageGraph {
  const fullUrl = `${BASE_URL}${path}`
  const postId = `${fullUrl}#post`

  const blogPost: BlogPosting = {
    '@type': 'BlogPosting',
    '@id': postId,
    mainEntityOfPage: fullUrl,
    headline,
    description,
    image,
    datePublished: datePublished.toISOString(),
    dateModified: dateModified?.toISOString(),
    author: {
      '@type': 'Organization',
      name: ORGANIZATION_NAME,
      url: BASE_URL,
    },
    publisher: { '@id': publisherId },
    isPartOf: { '@id': `${BASE_URL}/blog#blog` },
    inLanguage: 'en',
  }

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@graph': [
      blogPost,
      generateBreadcrumbList({
        path,
        title: headline,
        includeBlogLevel: true,
      }),
    ],
  }
}
