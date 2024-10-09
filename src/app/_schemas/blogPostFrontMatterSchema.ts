import { z } from 'zod'

import {
  createCategorySchema,
  getCategorySettings,
} from '@/utils/categoryUtils'

import { DynamicBaseDataSchema } from '@/_schemas/DynamicDataBaseSchema'

const { validCategoryIds } = getCategorySettings('blog_posts')

const categorySchema = createCategorySchema(validCategoryIds)

export const BlogPostFrontMatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  category: categorySchema,
  description: z.string(),
  content: z.string(),
})
