import { z } from 'zod'

const errorMessages = {
  firstName: 'Your first name is required',
  lastName: 'Your last name is required',
  company: 'Your company name is required',
} as const

export const OfferStorageFormSchema = z.object({
  firstName: z
    .string({ error: errorMessages.firstName })
    .min(1, { error: errorMessages.firstName }),
  lastName: z
    .string({ error: errorMessages.lastName })
    .min(1, { error: errorMessages.lastName }),
  company: z
    .string({ error: errorMessages.company })
    .min(1, { error: errorMessages.company }),
  businessEmail: z
    .email({ error: 'Your company email format is invalid' })
    .min(1, { error: 'Your company email is required' }),
  additionalInfo: z.string().or(z.undefined()),
  communicationOptIn: z.boolean(),
})

export type OfferStorageFormData = z.infer<typeof OfferStorageFormSchema>
