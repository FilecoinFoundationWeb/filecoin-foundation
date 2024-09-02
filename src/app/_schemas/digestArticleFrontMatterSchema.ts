import { z } from 'zod'

import { DynamicBaseDataSchema } from '@/schemas/dynamicDataBaseSchema'
import { ImagePropsSchema } from '@/schemas/imagePropsSchema'

const ImagePropsWithoutAltSchema = ImagePropsSchema.omit({ alt: true })

export const DigestArticleFrontMatterSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  issueNumber: z.string(),
  articleNumber: z.number(),
  authors: z.array(
    z.object({
      firstName: z.string(),
      lastName: z.string(),
      image: ImagePropsWithoutAltSchema.optional(),
    }),
  ),
  content: z.string(),
})
