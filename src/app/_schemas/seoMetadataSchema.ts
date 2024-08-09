import { z } from 'zod'

import configJson from '@/data/cmsConfigSchema.json'

const { seo_metadata_description_max_characters } = configJson

export const SeoMetadataSchema = z.object({
  title: z.string(),
  description: z.string().max(seo_metadata_description_max_characters),
})
