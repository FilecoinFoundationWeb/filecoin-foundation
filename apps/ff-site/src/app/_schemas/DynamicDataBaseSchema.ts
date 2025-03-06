import { ImagePropsSchema } from '@filecoin-foundation/utils/schemas/ImagePropsSchema'
import { z } from 'zod'

import { SeoMetadataWithOptionalTitleSchema } from '@/schemas/SeoMetadataSchema'

export const DynamicBaseDataSchema = z
  .object({
    'created-on': z.coerce.date(),
    'updated-on': z.coerce.date(),
    'published-on': z.coerce.date(),
    image: ImagePropsSchema.optional(),
    seo: SeoMetadataWithOptionalTitleSchema,
  })
  .strict()

export type DynamicBaseData = z.infer<typeof DynamicBaseDataSchema>
