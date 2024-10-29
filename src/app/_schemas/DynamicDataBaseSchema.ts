import { z } from 'zod'

import { ImagePropsSchema } from '@/schemas/ImagePropsSchema'
import { SeoMetadataWithOptionalTitleSchema } from '@/schemas/SeoMetadataSchema'

export const DynamicBaseDataSchema = z
  .object({
    'created-on': z.coerce.date(),
    'updated-on': z.coerce.date().optional(),
    'published-on': z.coerce.date().optional(),
    image: ImagePropsSchema.optional(),
    seo: SeoMetadataWithOptionalTitleSchema,
  })
  .strict()

export type DynamicBaseData = z.infer<typeof DynamicBaseDataSchema>
