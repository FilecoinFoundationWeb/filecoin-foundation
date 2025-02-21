import { z } from 'zod'

import { ImagePropsSchema } from '@/schemas/ImagePropsSchema'

const sponsorSchema = z.object({
  name: z.string(),
  website: z.string().url(),
  image: ImagePropsSchema,
})

export const SponsorsSchema = z.object({
  'first-tier': z.array(sponsorSchema).max(4).optional(),
  'second-tier': z.array(sponsorSchema).max(5).optional(),
  'third-tier': z.array(sponsorSchema).max(7).optional(),
})
