import { z } from 'zod'

import { ImagePropsSchema } from '@/schemas/imagePropsSchema'
import { SeoMetadataSchema } from '@/schemas/seoMetadataSchema'

import { iso8601StringToDate } from '@/utils/dateUtils'

export const DynamicBaseDataSchema = z.object({
  slug: z.string(),
  createdOn: z.preprocess(iso8601StringToDate, z.date()),
  updatedOn: z.preprocess(iso8601StringToDate, z.date()).optional(),
  publishedOn: z.preprocess(iso8601StringToDate, z.date()).optional(),
  image: ImagePropsSchema.optional(),
  seo: SeoMetadataSchema,
})

export type DynamicBaseData = z.infer<typeof DynamicBaseDataSchema>
