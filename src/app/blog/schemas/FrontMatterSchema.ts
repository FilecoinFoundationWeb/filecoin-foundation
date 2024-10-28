import { z } from 'zod'

import { getCategorySettings } from '@/utils/categoryUtils'
import { createEnumSchema } from '@/utils/zodUtils'

import { DynamicBaseDataSchema } from '@/schemas/DynamicDataBaseSchema'

const { validCategoryIds } = getCategorySettings('blog_posts')

const CategoryEnumSchema = createEnumSchema(validCategoryIds)

export const BlogPostFrontMatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  category: CategoryEnumSchema,
  description: z.string(),
  content: z.string(),
}).strict()
