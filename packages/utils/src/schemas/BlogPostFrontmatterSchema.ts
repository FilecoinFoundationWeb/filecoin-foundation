import { DynamicBaseDataSchema } from '@filecoin-foundation/utils/schemas/DynamicDataBaseSchema'
import { createEnumSchema } from '@filecoin-foundation/utils/zodUtils'
import { z } from 'zod'

import { getCMSFieldOptionsAndValidIds } from '../getCMSFieldOptionsAndValidIds'

// A function that generates the schema based on provided configData
export function createBlogPostFrontmatterSchema(configData: any) {
  const { validIds: validCategoryIds } = getCMSFieldOptionsAndValidIds({
    collectionName: 'blog_posts',
    fieldName: 'category',
    configData,
  })

  const CategorySchema = createEnumSchema(validCategoryIds)

  return DynamicBaseDataSchema.extend({
    title: z.string(),
    category: CategorySchema,
    description: z.string(),
    content: z.string(),
    'add-table-of-contents': z.boolean().optional(),
  }).strict()
}

// A type for the schema
export type BlogPostFrontmatter = z.infer<
  ReturnType<typeof createBlogPostFrontmatterSchema>
>
