import type { WebPage, WithContext } from 'schema-dts'

import { BlogPostData } from '@/types/blogPostTypes'
import { SeoMetadata } from '@/types/metadataTypes'

import {
  baseOrganizationSchema,
  generateWebPageStructuredData,
} from '@/utils/baseStructuredData'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

export const generateBlogPageStructuredData = (
  posts: BlogPostData[],
  seo: SeoMetadata,
): WithContext<WebPage> => {
  const blogPageBaseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.BLOG.path,
  })

  return {
    ...blogPageBaseData,
    publisher: baseOrganizationSchema,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.slice(0, 5).map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'BlogPosting',
          name: post.title,
          description: post.description,
          image: post.image?.url,
          url: `${BASE_URL}${PATHS.BLOG.path}/${post.slug}`,
        },
      })),
    },
  }
}
