import { z } from 'zod'

// import configJson from '@/data/cmsConfigSchema.json'

// const { seo_metadata_description_max_characters } = configJson

const TwitterCardType = z.enum(['summary', 'summary_large_image', 'player'])

const OpenGraphMetadataSchema = z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
  })
  .strict()

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
    'open-graph': OpenGraphMetadataSchema.optional(),
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
