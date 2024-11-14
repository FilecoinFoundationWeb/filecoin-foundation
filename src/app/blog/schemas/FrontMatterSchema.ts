import { z } from 'zod'

import { getCategorySettings } from '@/utils/categoryUtils'
import { createEnumSchema } from '@/utils/zodUtils'

import { DynamicBaseDataSchema } from '@/schemas/DynamicDataBaseSchema'

const { validIds: validCategoryIds } = getCategorySettings({
  collectionName: 'blog_posts',
})

const CategorySchema = createEnumSchema(validCategoryIds)

export const BlogPostFrontMatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  category: CategorySchema,
  description: z.string(),
  content: z.string(),
}).strict()
