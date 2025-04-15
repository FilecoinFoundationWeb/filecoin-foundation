import { DynamicBaseDataSchema } from '@filecoin-foundation/utils/schemas/DynamicDataBaseSchema'
import { createEnumSchema } from '@filecoin-foundation/utils/zodUtils'
import { z } from 'zod'

import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'

const { validIds: validCategoryIds } = getCMSFieldOptionsAndValidIds({
  collectionName: 'blog_posts',
  fieldName: 'category',
})

const CategorySchema = createEnumSchema(validCategoryIds)

export const BlogPostFrontmatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  category: CategorySchema,
  description: z.string(),
  content: z.string(),
  'add-table-of-contents': z.boolean().optional(),
  'chinese-translation-url': z.string().url().optional(),
}).strict()
