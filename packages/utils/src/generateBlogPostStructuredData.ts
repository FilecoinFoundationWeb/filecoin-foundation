import { SCHEMA_CONTEXT_URL } from './constants/structuredDataConstants'

import type { BlogPosting, Organization, WithContext } from 'schema-dts'

type GenerateBlogPostStructuredDataProps = {
  title: string
  description: string
  image?: { src: string }
  publishedOn: Date
  updatedOn: Date
  slug: string
  organizationName: string
  baseUrl: string
  basePath: string
  organizationSchema: WithContext<Organization>
}

export function generateBlogPostStructuredData({
  title,
  description,
  image,
  publishedOn,
  updatedOn,
  slug,
  organizationName,
  baseUrl,
  basePath,
  organizationSchema,
}: GenerateBlogPostStructuredDataProps): WithContext<BlogPosting> {
  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: image?.src,
    author: {
      '@type': 'Organization',
      name: organizationName,
      url: baseUrl,
    },
    datePublished: publishedOn.toISOString(),
    dateModified: updatedOn.toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}${basePath}/${slug}`,
    },
    publisher: organizationSchema,
  }
}
