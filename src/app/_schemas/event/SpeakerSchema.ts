import { z } from 'zod'

import { ImagePropsSchema } from '@/schemas/ImagePropsSchema'

const speakerSchema = z.object({
  name: z.string(),
  title: z.string(),
  company: z.string(),
  linkedin: z.string().url(),
  image: ImagePropsSchema,
})

export const SpeakersSchema = z.array(speakerSchema)

export type Speaker = z.infer<typeof speakerSchema>
