import { createFeaturedEntryPageSchemaAsync } from '@/utils/zod/createFeaturedEntryPageSchema'

import { getBlogPostData } from '../utils/getBlogPostData'

export const FrontmatterSchema =
  createFeaturedEntryPageSchemaAsync(getBlogPostData)
