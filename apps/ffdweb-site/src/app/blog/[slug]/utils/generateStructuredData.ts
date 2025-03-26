import { generateBlogPostStructuredData } from '@filecoin-foundation/utils/generateBlogPostStructuredData'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import type { BlogPost } from '@/blog/types/blogPostType'

export function generateStructuredData(data: BlogPost) {
  return generateBlogPostStructuredData({
    ...data,
    organizationName: ORGANIZATION_NAME,
    baseUrl: BASE_URL,
    basePath: PATHS.BLOG.path,
    organizationSchema: ORGANIZATION_SCHEMA_BASE,
  })
}
