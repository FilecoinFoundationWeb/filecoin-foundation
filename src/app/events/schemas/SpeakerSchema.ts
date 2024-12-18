import { z } from 'zod'

import { ImagePropsSchema } from '@/schemas/ImagePropsSchema'

const speakersListSchema = z.object({
  name: z.string(),
  title: z.string(),
  company: z.string(),
  linkedin: z.string().url(),
  image: ImagePropsSchema,
})

export const SpeakersSchema = z.object({
  kicker: z.string().optional().default('Speakers'),
  title: z.string().optional().default('Speakers'),
  description: z.string().optional(),
  speakers_list: z.array(speakersListSchema),
})
