import { z } from 'zod'

const defaultMessages = {
  firstNameRequired: 'Your first name is required',
  lastNameRequired: 'Your last name is required',
  companyNameRequired: 'Your company name is required',
  businessEmailInvalid: 'Your company email format is invalid',
  businessEmailRequired: 'Your company email is required',
}

type ProvideStorageFormMessages = typeof defaultMessages

export function createProvideStorageFormSchema(
  messages: ProvideStorageFormMessages = defaultMessages,
) {
  return z.object({
    firstName: z
      .string({ error: messages.firstNameRequired })
      .min(1, { error: messages.firstNameRequired }),
    lastName: z
      .string({ error: messages.lastNameRequired })
      .min(1, { error: messages.lastNameRequired }),
    companyName: z
      .string({ error: messages.companyNameRequired })
      .min(1, { error: messages.companyNameRequired }),
    businessEmail: z
      .string({ error: messages.businessEmailRequired })
      .min(1, { error: messages.businessEmailRequired })
      .pipe(z.email({ error: messages.businessEmailInvalid })),
    additionalInfo: z.string().or(z.undefined()),
    communicationOptIn: z.boolean(),
  })
}

export type ProvideStorageFormSchema = z.infer<
  ReturnType<typeof createProvideStorageFormSchema>
>
