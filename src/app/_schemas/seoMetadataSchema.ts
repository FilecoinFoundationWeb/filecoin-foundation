import { z } from 'zod'

import configJson from '@/data/cmsConfigSchema.json'

const { seo_metadata_description_max_characters } = configJson

const TwitterCardType = z.enum(['summary', 'summary_large_image', 'player'])

export const SeoMetadataSchema = z.object({
  title: z.string(),
  description: z.string().max(seo_metadata_description_max_characters),
  og: z
    .object({
      title: z.string().optional(),
      image: z.string().optional(),
    })
    .optional(),
  twitter: z
    .object({
      card: TwitterCardType.optional(),
      site: z.string().optional(),
      creator: z.string().optional(),
      image: z.string().optional(),
    })
    .optional(),
})
