import { z } from 'zod'

export const NewsletterFormSchema = z.object({
  email: z
    .email({ error: 'Your email format is invalid' })
    .min(1, { error: 'Your email is required' }),
})

export type NewsletterFormData = z.infer<typeof NewsletterFormSchema>
