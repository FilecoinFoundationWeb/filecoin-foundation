import type { WebPage, WithContext } from 'schema-dts'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

import type { SeoMetadata } from '@/schemas/SeoMetadataSchema'

import type { BlogPost } from '@/blog/types/blogPostType'

export function generateStructuredData(
  posts: Array<BlogPost>,
  seo: SeoMetadata,
): WithContext<WebPage> {
  const baseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.BLOG.path,
  })

  return {
    ...baseData,
    publisher: ORGANIZATION_SCHEMA_BASE,
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
          url: `${BASE_URL}${PATHS.BLOG.path}/${post.slug}`,
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
