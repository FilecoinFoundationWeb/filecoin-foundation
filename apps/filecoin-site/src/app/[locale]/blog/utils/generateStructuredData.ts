import type { BlogPageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import type { StructuredDataParams } from '@filecoin-foundation/utils/types/structuredDataParams'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import type { BlogPost } from '../types/blogPostType'

import { generateBlogStructuredData } from './generateBlogStructuredData'

export function generateStructuredData(
  seo: StructuredDataParams,
  sortedPosts: Array<BlogPost>,
): BlogPageGraph {
  return generateBlogStructuredData({
    path: PATHS.BLOG.path,
    name: seo.title,
    items: sortedPosts.map((post) => ({
      url: `${BASE_URL}${PATHS.BLOG.path}/${post.slug}`,
      name: post.title,
    })),
  })
}
