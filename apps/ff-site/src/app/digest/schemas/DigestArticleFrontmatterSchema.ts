import { DynamicBaseDataSchema } from '@filecoin-foundation/ui/schemas/DynamicDataBaseSchema'
import { ImagePropsSchema } from '@filecoin-foundation/utils/schemas/ImagePropsSchema'
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
    }),
  ),
  content: z.string(),
}).strict()
