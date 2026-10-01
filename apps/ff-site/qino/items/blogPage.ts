import { FeaturedPageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const blogPageItem = qino.defineItem({
  file: '/pages/blog.md',
  schema: FeaturedPageFrontmatterSchema,
})
