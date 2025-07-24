import { z } from 'zod'

import { SeoMetadataWithOptionalTitleSchema } from '../schemas/SeoMetadataSchema'

import { ImagePropsSchema } from './ImagePropsSchema'

export const DynamicBaseDataSchema = z.strictObject({
  'created-on': z.coerce.date(),
  'updated-on': z.coerce.date(),
  'published-on': z.coerce.date(),
  image: ImagePropsSchema.optional(),
  seo: SeoMetadataWithOptionalTitleSchema,
})

export type DynamicBaseData = z.infer<typeof DynamicBaseDataSchema>
