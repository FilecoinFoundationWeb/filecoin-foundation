import { z } from 'zod'

const errorMessages = {
  firstNameRequired: 'Your first name is required',
  lastNameRequired: 'Your last name is required',
  companyNameRequired: 'Your company name is required',
  businessEmailInvalid: 'Your company email format is invalid',
  businessEmailRequired: 'Your company email is required',
  dataVolumeRequired: 'Please select a data volume',
} as const

const DATA_VOLUME_OPTIONS = [
  '0-1 TB',
  '1-10 TB',
  '10-100 TB',
  '100-500 TB',
  '500-1,000 TB',
  '1+ PB',
] as const

export const dataVolumeOptions = DATA_VOLUME_OPTIONS.map((value) => ({
  value,
  label: value,
}))

export const TalkToExpertFormSchema = z.object({
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
  dataVolume: z.enum(DATA_VOLUME_OPTIONS, {
    error: errorMessages.dataVolumeRequired,
  }),
  communicationOptIn: z.boolean(),
})

export type TalkToExpertFormData = z.infer<typeof TalkToExpertFormSchema>
