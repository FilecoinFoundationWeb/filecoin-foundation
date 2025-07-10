import { z } from 'zod'

export const NewsletterFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Your email is required' })
    .email({ message: 'The email format is invalid' }),
})

export type NewsletterFormData = z.infer<typeof NewsletterFormSchema>
