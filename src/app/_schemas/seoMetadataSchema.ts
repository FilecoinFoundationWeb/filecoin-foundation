import { z } from 'zod'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import configJson from '@/data/cmsConfigSchema.json'
import { graphicsData } from '@/data/graphicsData'

const { seo_metadata_description_max_characters } = configJson

const TwitterCardType = z.enum(['summary', 'summary_large_image', 'player'])

export const SeoMetadataSchema = z
  .object({
    title: z.string(),
    description: z.string().max(seo_metadata_description_max_characters),
    image: z.string().optional().default(graphicsData.home.data.src),
    'open-graph': z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        image: z.string().optional(),
      })
      .strict()
      .optional(),
    twitter: z
      .object({
        card: TwitterCardType.optional().default('summary'),
        site: z
          .string()
          .optional()
          .default(FILECOIN_FOUNDATION_URLS.social.twitter.handle),
        creator: z
          .string()
          .optional()
          .default(FILECOIN_FOUNDATION_URLS.social.twitter.handle),
      })
      .strict()
      .optional(),
  })
  .strict()

export type SeoMetadata = z.infer<typeof SeoMetadataSchema>
export type SeoMetadataInput = z.input<typeof SeoMetadataSchema>
