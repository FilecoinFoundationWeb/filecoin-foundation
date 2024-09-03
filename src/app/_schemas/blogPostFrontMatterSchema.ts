import { z } from 'zod'

import {
  getCategorySettings,
  createCategorySchema,
} from '@/utils/categoryUtils'

import { DynamicBaseDataSchema } from '@/schemas/dynamicDataBaseSchema'

const { validCategoryIds } = getCategorySettings('blog_posts')

const categorySchema = createCategorySchema(validCategoryIds)

export const BlogPostFrontMatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  category: categorySchema,
  description: z.string(),
  content: z.string(),
})
