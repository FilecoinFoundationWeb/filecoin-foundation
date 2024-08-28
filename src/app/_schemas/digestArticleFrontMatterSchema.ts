import { z } from 'zod'

import { DynamicBaseDataSchema } from '@/schemas/dynamicDataBaseSchema'
import { ImagePropsSchema } from '@/schemas/imagePropsSchema'

export const DigestArticleFrontMatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  description: z.string(),
  issueNumber: z.number(),
  articleNumber: z.number(),
  publicationDate: z.coerce.date().optional(),
  authors: z.array(
    z.object({
      firstName: z.string(),
      lastName: z.string(),
      image: ImagePropsSchema.optional(),
    }),
  ),
  content: z.string(),
})
