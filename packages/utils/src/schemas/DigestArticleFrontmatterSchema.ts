import { z } from 'zod'

import { DynamicBaseDataSchema } from './DynamicDataBaseSchema'
import { ImagePropsSchema } from './ImagePropsSchema'

const DigestArticleFrontmatterFields = {
  title: z.string(),
  'issue-number': z.number().int().positive(),
  'article-number': z.number().int().positive(),
  authors: z
    .array(
      z.object({
        'first-name': z.string(),
        'last-name': z.string(),
        image: ImagePropsSchema.optional(),
        company: z.string(),
        bio: z.string().optional(),
      }),
    )
    .min(1),
  content: z.string(),
}

export const DigestArticleFrontmatterSchema = z.strictObject({
  ...DynamicBaseDataSchema.shape,
  ...DigestArticleFrontmatterFields,
})
