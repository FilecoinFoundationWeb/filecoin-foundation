import { z } from 'zod'

import { DynamicBaseDataSchema } from '@/schemas/DynamicDataBaseSchema'
import { ImagePropsSchema } from '@/schemas/ImagePropsSchema'

export const DigestArticleFrontMatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  issueNumber: z.string(),
  articleNumber: z.number(),
  authors: z.array(
    z.object({
      firstName: z.string(),
      lastName: z.string(),
      image: ImagePropsSchema.optional(),
      company: z.string(),
    }),
  ),
  content: z.string(),
})
