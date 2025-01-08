import { z } from 'zod'

import { injectFallbackIfNoLocalImage } from '@/utils/zodTransformUtils'

import { DynamicBaseDataSchema } from '@/schemas/DynamicDataBaseSchema'
import { ImagePropsSchema } from '@/schemas/ImagePropsSchema'

export const DigestArticleFrontMatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  'issue-number': z.string(),
  'article-number': z.number(),
  authors: z.array(
    z.object({
      'first-name': z.string(),
      'last-name': z.string(),
      image: ImagePropsSchema.optional().transform(
        injectFallbackIfNoLocalImage,
      ),
      company: z.string(),
    }),
  ),
  content: z.string(),
}).strict()
