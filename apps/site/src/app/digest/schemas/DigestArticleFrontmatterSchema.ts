import { z } from 'zod'

import { DynamicBaseDataSchema } from '@/schemas/DynamicDataBaseSchema'
import { ImagePropsSchema } from '@/schemas/ImagePropsSchema'

export const DigestArticleFrontmatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  'issue-number': z.string(),
  'article-number': z.number(),
  authors: z.array(
    z.object({
      'first-name': z.string(),
      'last-name': z.string(),
      image: ImagePropsSchema.optional(),
      company: z.string(),
    }),
  ),
  content: z.string(),
}).strict()
