import { z } from 'zod'

import { ImagePropsSchema } from '@filecoin-foundation/utils/schemas/ImagePropsSchema'

const sponsorSchema = z.object({
  name: z.string(),
  website: z.url().optional(),
  image: ImagePropsSchema,
})

export const SponsorsSchema = z.object({
  'first-tier': z.array(sponsorSchema).max(4).optional(),
  'second-tier': z.array(sponsorSchema).max(5).optional(),
  'third-tier': z.array(sponsorSchema).max(7).optional(),
})
