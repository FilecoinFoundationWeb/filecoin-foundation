import type { WebPage, WithContext } from 'schema-dts'

import type { SeoMetadata } from '@filecoin-foundation/utils/schemas/SeoMetadataSchema'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'
import { getOrganizationSchemaBase } from '@/constants/structuredDataConstants'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

import type { BlogPost } from '../types/blogPostType'

export async function generateStructuredData(
  posts: Array<BlogPost>,
  seo: SeoMetadata,
): Promise<WithContext<WebPage>> {
  const baseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.BLOG.path,
  })

  return {
    ...baseData,
    publisher: await getOrganizationSchemaBase(),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.slice(0, 5).map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          image: post.image && post.image.src,
          url: `${BASE_URL}${PATHS.BLOG.path}/${post._meta.slug}`,
          author: {
            '@type': 'Organization',
            name: ORGANIZATION_NAME,
            url: BASE_URL,
          },
        },
      })),
    },
  }
}
