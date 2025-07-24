import { z } from 'zod'

import { DynamicBaseDataSchema } from '@filecoin-foundation/utils/schemas/DynamicDataBaseSchema'
import { createEnumSchema } from '@filecoin-foundation/utils/zodUtils'

import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'

const { validIds: validCategoryIds } = getCMSFieldOptionsAndValidIds({
  collectionName: 'projects',
  fieldName: 'category',
})

const CategorySchema = createEnumSchema(validCategoryIds)

const ProjectFrontmatterFields = {
  title: z.string(),
  category: CategorySchema,
  description: z.string(),
  website: z.string().optional(),
  'featured-content': z.string().optional(),
  'active-partnership': z.boolean().optional().default(false),
}

export const ProjectFrontmatterSchema = z.strictObject({
  ...DynamicBaseDataSchema.shape,
  ...ProjectFrontmatterFields,
})
