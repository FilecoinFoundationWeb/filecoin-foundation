import { z } from 'zod'

import { DynamicBaseDataSchema } from '@/schemas/dynamicDataBaseSchema'

import {
  getCategorySettings,
  createCategorySchema,
} from '@/utils/categoryUtils'

const { validCategoryOptions } = getCategorySettings('blog_posts')

const categorySchema = createCategorySchema(validCategoryOptions)

export const BlogPostDataSchema = DynamicBaseDataSchema.extend({
  slug: z.string(),
  title: z.string(),
  category: categorySchema,
  description: z.string(),
  content: z.string().optional(),
})

export type BlogPostData = z.infer<typeof BlogPostDataSchema>
