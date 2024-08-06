import { z } from 'zod'

export const SeoMetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
})
