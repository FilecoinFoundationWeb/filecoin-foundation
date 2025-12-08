import type { BlogPosting } from 'schema-dts'

import type { BlogPostPageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'

import { PATHS, type NextRouteWithoutLocale } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'
import { STRUCTURED_DATA_IDS } from '@/constants/structuredDataConstants'

import { generateBreadcrumbList } from '@/utils/generateBreadcrumbsList'

type GenerateBlogPostStructuredDataProps = {
  path: NextRouteWithoutLocale
  headline: string
  description: BlogPosting['description']
  datePublished: Date
  dateModified?: Date
  image?: BlogPosting['image']
}

export function generateBlogPostStructuredData({
  path,
  headline,
  description,
  image,
  datePublished,
  dateModified,
}: GenerateBlogPostStructuredDataProps): BlogPostPageGraph {
  const blogPost: BlogPosting = {
    '@type': 'BlogPosting',
    '@id': STRUCTURED_DATA_IDS.getBlogPostId(path),
    mainEntityOfPage: `${BASE_URL}${path}`,
    headline,
    description,
    ...(image && { image }),
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
