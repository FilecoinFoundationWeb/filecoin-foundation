import { z } from 'zod'

import { DynamicBaseDataSchema } from '@/schemas/dynamicDataBaseSchema'

import {
  getCategorySettings,
  createCategorySchema,
} from '@/utils/categoryUtils'

const { validCategoryOptions } = getCategorySettings('blog_posts')

const categorySchema = createCategorySchema(validCategoryOptions)

export const BlogPostFrontMatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  category: categorySchema,
  description: z.string(),
  content: z.string(),
})
