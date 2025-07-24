import { z } from 'zod'

import { DynamicBaseDataSchema } from '@filecoin-foundation/utils/schemas/DynamicDataBaseSchema'
import { createEnumSchema } from '@filecoin-foundation/utils/zodUtils'

import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'

const { validIds: validCategoryIds } = getCMSFieldOptionsAndValidIds({
  collectionName: 'blog_posts',
  fieldName: 'category',
})

const CategorySchema = createEnumSchema(validCategoryIds)

const BlogPostFields = {
  title: z.string(),
  category: CategorySchema,
  content: z.string(),
}

export const BlogPostFrontmatterSchema = z.strictObject({
  ...DynamicBaseDataSchema.shape,
  ...BlogPostFields,
})
