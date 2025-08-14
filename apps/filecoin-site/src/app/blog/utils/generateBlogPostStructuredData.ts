import type { BlogPosting } from 'schema-dts'

import type { BlogPostPageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'

import { generateBreadcrumbList } from '@/utils/generateBreadcrumbsList'

import { STRUCTURED_DATA_IDS } from '@/_constants/structuredDataConstants'

type GenerateBlogPostStructuredDataProps = {
  path: string
  headline: string
  description: BlogPosting['description']
  image: BlogPosting['image']
  datePublished: Date
  dateModified?: Date
}

export function generateBlogPostStructuredData({
  path,
  headline,
  description,
  image,
  datePublished,
  dateModified,
}: GenerateBlogPostStructuredDataProps): BlogPostPageGraph {
  const fullUrl = `${BASE_URL}${path}`

  const blogPost: BlogPosting = {
    '@type': 'BlogPosting',
    '@id': STRUCTURED_DATA_IDS.BLOG_POST(path),
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
    publisher: { '@id': STRUCTURED_DATA_IDS.ORGANIZATION },
    isPartOf: { '@id': STRUCTURED_DATA_IDS.BLOG },
    inLanguage: 'en',
  }

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@graph': [
      blogPost,
      generateBreadcrumbList({
        path,
        title: headline,
        parentPaths: [{ path: PATHS.BLOG.path, title: PATHS.BLOG.label }],
      }),
    ],
  }
}
