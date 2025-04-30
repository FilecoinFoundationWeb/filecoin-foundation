import { z } from 'zod'

import { DynamicBaseDataSchema } from '@filecoin-foundation/utils/schemas/DynamicDataBaseSchema'
import { createEnumSchema } from '@filecoin-foundation/utils/zodUtils'

import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'

const { validIds: validCategoryIds } = getCMSFieldOptionsAndValidIds({
  collectionName: 'learning_resources',
  fieldName: 'category',
})

const { validIds: validResourceTypeIds } = getCMSFieldOptionsAndValidIds({
  collectionName: 'learning_resources',
  fieldName: 'resource-type',
})

const { validIds: validTechnicalityIds } = getCMSFieldOptionsAndValidIds({
  collectionName: 'learning_resources',
  fieldName: 'technicality',
})

const CategorySchema = createEnumSchema(validCategoryIds)
const TechnicalitySchema = createEnumSchema(validTechnicalityIds)
const ResourceTypeSchema = createEnumSchema(validResourceTypeIds)

export const LearningResourceFrontmatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  description: z.string(),
  organization: z.string().optional(),
  category: CategorySchema,
  'resource-type': ResourceTypeSchema,
  technicality: TechnicalitySchema,
  length: z.string().optional(),
  keywords: z.string().optional(),
  link: z.string().url(),
}).strict()
