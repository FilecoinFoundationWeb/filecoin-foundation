import { z } from 'zod'

const BaseSeoMetadataSchema = z
  .object({
    description: z.string().max(220),
  })
  .strict()

export const SeoMetadataSchema = BaseSeoMetadataSchema.extend({
  title: z.string(),
}).strict()

export const SeoMetadataWithOptionalTitleSchema = BaseSeoMetadataSchema.extend({
  title: z.string().optional(),
}).strict()

export type SeoMetadata = z.infer<typeof SeoMetadataSchema>
