import { z } from 'zod'

export const ImagePropsSchema = z.strictObject({
  src: z.string(),
  alt: z.string().optional(),
})
