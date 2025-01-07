import { createFeaturedEntryPageSchema } from '@/utils/zod/createFeaturedEntryPageSchema'

import { getBlogPostData } from '../utils/getBlogPostData'

export const PageFrontmatterSchema =
  createFeaturedEntryPageSchema(getBlogPostData)
