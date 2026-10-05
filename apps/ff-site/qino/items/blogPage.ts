import { camelcaseKeysDeep } from '@/utils/camelcaseKeysDeep'

import { FeaturedPageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'
import { blogPostCollection } from '../collections/blogPosts'

export const blogPageItem = qino.defineItem({
  file: 'pages/blog.md',
  schema: FeaturedPageFrontmatterSchema.transform(camelcaseKeysDeep),
  relations: { featuredEntry: blogPostCollection },
  views: (view) => ({ default: view({ resolveRelations: 1 }) }),
})
