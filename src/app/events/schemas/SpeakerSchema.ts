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
  title: z.string().optional(),
  kicker: z.string().optional(),
  description: z.string().optional(),
  speakers_list: z.array(speakersListSchema),
})
