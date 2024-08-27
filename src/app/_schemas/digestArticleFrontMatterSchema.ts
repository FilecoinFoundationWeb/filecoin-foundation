import { z } from 'zod'

import { DynamicBaseDataSchema } from '@/schemas/dynamicDataBaseSchema'

export const DigestArticleFrontMatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  authors: z.array(
    z.object({
      name: z.string(),
      image: z
        .object({
          src: z.string().url().optional(),
          alt: z.string().optional(),
        })
        .optional(),
    }),
  ),
  description: z.string(),
  issueNumber: z.number(),
  articleNumber: z.number(),
  publicationDate: z.coerce.date().optional(),
  content: z.string(),
})
