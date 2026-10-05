import type { BlogPosting, WithContext } from 'schema-dts'

import { generateBlogPostStructuredData } from '@filecoin-foundation/utils/generateBlogPostStructuredData'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'
import { getOrganizationSchemaBase } from '@/constants/structuredDataConstants'

import type { BlogPost } from '@/qino/collections/blogPosts'

export async function generateStructuredData(
  data: BlogPost,
): Promise<WithContext<BlogPosting>> {
  return generateBlogPostStructuredData({
    ...data,
    slug: data._meta.slug,
    organizationName: ORGANIZATION_NAME,
    baseUrl: BASE_URL,
    basePath: PATHS.BLOG.path,
    organizationSchema: await getOrganizationSchemaBase(),
  })
}
