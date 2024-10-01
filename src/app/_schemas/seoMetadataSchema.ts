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
    image: z.string().default(graphicsData.home.data.src).optional(),
    og: z
      .object({
        title: z.string().optional(),
        image: z.string().optional(),
      })
      .strict()
      .optional(),
    twitter: z
      .object({
        card: TwitterCardType.default('summary').optional(),
        site: z
          .string()
          .default(FILECOIN_FOUNDATION_URLS.social.twitter.handle)
          .optional(),
        creator: z
          .string()
          .default(FILECOIN_FOUNDATION_URLS.social.twitter.handle)
          .optional(),
      })
      .strict()
      .optional(),
  })
  .strict()

export type SeoMetadata = z.infer<typeof SeoMetadataSchema>
