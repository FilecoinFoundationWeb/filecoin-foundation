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

// Temporary schema duplication until all schemas are migrated to kebab-case to match the CMS
export const BaseDataSchemaKebabCase = z
  .object({
    'created-on': z.coerce.date(),
    'updated-on': z.coerce.date().optional(),
    'published-on': z.coerce.date().optional(),
    image: ImagePropsSchema.optional(),
    seo: SeoMetadataSchema,
  })
  .strict()

export type DynamicBaseData = z.infer<typeof DynamicBaseDataSchema>