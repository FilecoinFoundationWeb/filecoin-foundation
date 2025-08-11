import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'
import { generateBlogPostStructuredData } from '@filecoin-foundation/utils/generateBlogPostStructuredData'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'
import { FILECOIN_ORGANIZATION_SCHEMA } from '@/constants/structuredDataConstants'

import type { BlogPost } from '@/blog/types/blogPostType'

export function generateStructuredData(data: BlogPost) {
  return generateBlogPostStructuredData({
    ...data,
    organizationName: ORGANIZATION_NAME,
    baseUrl: BASE_URL,
    basePath: PATHS.BLOG.path,
    organizationSchema: {
      '@context': SCHEMA_CONTEXT_URL,
      ...FILECOIN_ORGANIZATION_SCHEMA,
    },
    description: data.excerpt,
    updatedOn: data.publishedOn,
    image: data.image ? { src: data.image.url } : undefined,
  })
}
