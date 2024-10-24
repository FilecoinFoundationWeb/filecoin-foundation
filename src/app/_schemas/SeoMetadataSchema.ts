import { z } from 'zod'

import configJson from '@/data/cmsConfigSchema.json'

const { seo_metadata_description_max_characters } = configJson

const TwitterCardType = z.enum(['summary', 'summary_large_image', 'player'])

const OpenGraphMetadataSchema = z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
  })
  .strict()
  .optional()

const TwitterMetadataSchema = z
  .object({
    card: TwitterCardType.optional(),
    site: z.string().optional(),
    creator: z.string().optional(),
  })
  .strict()
  .optional()

export const SeoMetadataSchema = z
  .object({
    title: z.string(),
    description: z.string().max(seo_metadata_description_max_characters),
    image: z.string().optional(),
    'open-graph': OpenGraphMetadataSchema,
    twitter: TwitterMetadataSchema,
  })
  .strict()

export type SeoMetadata = z.infer<typeof SeoMetadataSchema>
