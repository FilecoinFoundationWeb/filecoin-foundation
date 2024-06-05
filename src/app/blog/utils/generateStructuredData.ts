import type { WebPage, WithContext } from 'schema-dts'

import { BlogPostData } from '@/types/blogPostTypes'
import { SeoMetadata } from '@/types/metadataTypes'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'
import { BASE_ORGANIZATION_SCHEMA } from '@/constants/structuredDataConstants'

export function generateStructuredData(
  posts: BlogPostData[],
  seo: SeoMetadata,
): WithContext<WebPage> {
  const baseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.BLOG.path,
  })

  return {
    ...baseData,
    publisher: BASE_ORGANIZATION_SCHEMA,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.slice(0, 5).map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'BlogPosting',
          name: post.title,
          description: post.description,
          image: post.image.url,
          url: `${BASE_URL}${PATHS.BLOG.path}/${post.slug}`,
          author: {
            '@type': 'Organization',
            name: ORGANIZATION_NAME,
          },
        },
      })),
    },
  }
}
