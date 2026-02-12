import { z } from 'zod'

export type NewsletterFormMessages = {
  emailInvalid: string
  emailRequired: string
}

const defaultMessages: NewsletterFormMessages = {
  emailInvalid: 'Your email format is invalid',
  emailRequired: 'Your email is required',
}

export function createNewsletterFormSchema(
  messages: NewsletterFormMessages = defaultMessages,
) {
  return z.object({
    email: z
      .email({ error: messages.emailInvalid })
      .min(1, { error: messages.emailRequired }),
  })
}

export type NewsletterFormData = z.infer<
  ReturnType<typeof createNewsletterFormSchema>
>
