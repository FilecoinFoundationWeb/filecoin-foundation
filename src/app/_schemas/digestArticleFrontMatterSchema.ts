import { z } from 'zod'

import { DynamicBaseDataSchema } from '@/schemas/dynamicDataBaseSchema'

export const DigestArticleFrontMatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  description: z.string(),
  issueNumber: z.number(),
  articleNumber: z.number(),
  publicationDate: z.coerce.date().optional(),
  content: z.string(),
})
