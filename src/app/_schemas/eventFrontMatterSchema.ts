import { z } from 'zod'

import {
  getEventsCategorySettings,
  createCategorySchema,
} from '@/utils/categoryUtils'

import { DynamicBaseDataSchema } from '@/schemas/dynamicDataBaseSchema'

const { validCategoryIds } = getEventsCategorySettings()

const categorySchema = createCategorySchema(validCategoryIds)

export const EventFrontMatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  category: categorySchema,
  description: z.string().optional(),
  location: z.string(),
  externalLink: z.string().url().optional(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
})
