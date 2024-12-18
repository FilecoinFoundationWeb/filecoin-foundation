import { z } from 'zod'

import { ImagePropsSchema } from '@/schemas/ImagePropsSchema'

const SpeakerSchema = z.object({
  name: z.string(),
  title: z.string(),
  company: z.string(),
  linkedin: z.string().url(),
  image: ImagePropsSchema,
})

export const SpeakersSchema = z.array(SpeakerSchema)

export type Speaker = z.infer<typeof SpeakerSchema>
