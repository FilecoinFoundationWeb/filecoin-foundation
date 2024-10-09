import { z } from 'zod'

import { ImagePropsSchema } from '@/schemas/ImagePropsSchema'
import { SeoMetadataSchema } from '@/schemas/SeoMetadataSchema'

export const DynamicBaseDataSchema = z.object({
  createdOn: z.coerce.date(),
  updatedOn: z.coerce.date().optional(),
  publishedOn: z.coerce.date().optional(),
  image: ImagePropsSchema.optional(),
  seo: SeoMetadataSchema,
})

export type DynamicBaseData = z.infer<typeof DynamicBaseDataSchema>
