import { z } from 'zod'

export const ImagePropsSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
})
