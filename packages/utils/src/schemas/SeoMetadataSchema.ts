import { z } from 'zod'

const TwitterCardType = z.enum(['summary', 'summary_large_image', 'player'])

const TwitterMetadataSchema = z
  .object({
    card: TwitterCardType.optional(),
    site: z.string().optional(),
    creator: z.string().optional(),
  })
  .strict()

const BaseSeoMetadataSchema = z
  .object({
    description: z.string().max(220),
    image: z.string().optional(),
    twitter: TwitterMetadataSchema.optional(),
  })
  .strict()

export const SeoMetadataSchema = BaseSeoMetadataSchema.extend({
  title: z.string(),
}).strict()

export const SeoMetadataWithOptionalTitleSchema = BaseSeoMetadataSchema.extend({
  title: z.string().optional(),
}).strict()

export type SeoMetadata = z.infer<typeof SeoMetadataSchema>
