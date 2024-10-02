import { z } from 'zod'

import { ImagePropsSchema } from '@/schemas/imagePropsSchema'
import { SeoMetadataSchema } from '@/schemas/seoMetadataSchema'

export const DynamicBaseDataSchema = z
  .object({
    createdOn: z.coerce.date(),
    updatedOn: z.coerce.date().optional(),
    publishedOn: z.coerce.date().optional(),
    image: ImagePropsSchema.optional(),
    seo: SeoMetadataSchema,
  })
  .strict()

// Temporary schema duplication until all schemas are migrated to kebab-case to match the CMS
export const BaseDataSchemaKebabCase = z.object({
  'created-on': z.coerce.date(),
  'updated-on': z.coerce.date().optional(),
  'published-on': z.coerce.date().optional(),
  image: ImagePropsSchema.optional(),
  seo: SeoMetadataSchema,
})

export type DynamicBaseData = z.infer<typeof DynamicBaseDataSchema>
