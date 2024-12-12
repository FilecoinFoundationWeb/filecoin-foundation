import { z } from 'zod'

import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'
import { createEnumSchema } from '@/utils/zodUtils'

import { DynamicBaseDataSchema } from '@/schemas/DynamicDataBaseSchema'

const { validIds: validCategoryIds } = getCMSFieldOptionsAndValidIds({
  collectionName: 'blog_posts',
  fieldName: 'category',
})

const CategorySchema = createEnumSchema(validCategoryIds)

export const BlogPostFrontMatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  category: CategorySchema,
  description: z.string(),
  content: z.string(),
  'table-of-contents': z.boolean().optional(),
}).strict()
