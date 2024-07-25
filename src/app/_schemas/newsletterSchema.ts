import { z, ZodSchema } from 'zod'

export const NewsletterSchema: ZodSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
})
