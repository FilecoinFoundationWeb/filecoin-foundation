import { z } from 'zod'

const errorMessages = {
  firstNameRequired: 'Your first name is required',
  lastNameRequired: 'Your last name is required',
  companyNameRequired: 'Your company name is required',
  businessEmailInvalid: 'Your company email format is invalid',
  businessEmailRequired: 'Your company email is required',
} as const

export const ProvideStorageFormSchema = z.object({
  firstName: z
    .string({ error: errorMessages.firstNameRequired })
    .min(1, { error: errorMessages.firstNameRequired }),
  lastName: z
    .string({ error: errorMessages.lastNameRequired })
    .min(1, { error: errorMessages.lastNameRequired }),
  companyName: z
    .string({ error: errorMessages.companyNameRequired })
    .min(1, { error: errorMessages.companyNameRequired }),
  businessEmail: z
    .email({ error: errorMessages.businessEmailInvalid })
    .min(1, { error: errorMessages.businessEmailRequired }),
  additionalInfo: z.string().or(z.undefined()),
  communicationOptIn: z.boolean(),
})

export type ProvideStorageFormData = z.infer<typeof ProvideStorageFormSchema>
