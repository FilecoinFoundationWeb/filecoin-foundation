import { z } from 'zod'

import { ImagePropsSchema } from '@/schemas/ImagePropsSchema'

const speakerSchema = z.object({
  name: z.string(),
  title: z.string(),
  company: z.string(),
  linkedin: z.string().url(),
  image: ImagePropsSchema,
})

export const SpeakersSchema = z.object({
  kicker: z.string().default('Speakers').optional(),
  title: z.string().default('Speakers').optional(),
  description: z.string().optional(),
  speakers_list: z.array(speakerSchema),
})
