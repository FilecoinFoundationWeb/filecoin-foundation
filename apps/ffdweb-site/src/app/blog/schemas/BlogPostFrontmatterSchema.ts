import { createBlogPostFrontmatterSchema } from '@filecoin-foundation/utils/schemas/BlogPostFrontmatterSchema'

import configData from '@/data/cmsConfigSchema.json'

export const BlogPostFrontmatterSchema = createBlogPostFrontmatterSchema({
  configData,
})
