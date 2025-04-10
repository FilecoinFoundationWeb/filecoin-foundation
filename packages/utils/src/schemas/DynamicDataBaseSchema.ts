import { ImagePropsSchema } from './ImagePropsSchema'
import { SeoMetadataWithOptionalTitleSchema } from '../schemas/SeoMetadataSchema'
import { z } from 'zod'

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
