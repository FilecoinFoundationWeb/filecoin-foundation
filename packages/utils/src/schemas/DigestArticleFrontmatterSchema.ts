import { DynamicBaseDataSchema } from './DynamicDataBaseSchema'
import { ImagePropsSchema } from './ImagePropsSchema'
import { z } from 'zod'

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
      bio: z.string().optional(),
    }),
  ),
  content: z.string(),
}).strict()
