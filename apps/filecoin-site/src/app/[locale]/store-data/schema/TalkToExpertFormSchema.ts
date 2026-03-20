import { z } from 'zod'

const defaultMessages = {
  firstNameRequired: 'Your first name is required',
  lastNameRequired: 'Your last name is required',
  companyNameRequired: 'Your company name is required',
  businessEmailInvalid: 'Your company email format is invalid',
  businessEmailRequired: 'Your company email is required',
  dataVolumeRequired: 'Please select a data volume',
}

type TalkToExpertFormMessages = typeof defaultMessages

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

export function createTalkToExpertFormSchema(
  messages: TalkToExpertFormMessages = defaultMessages,
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
    dataVolume: z.enum(DATA_VOLUME_OPTIONS, {
      error: messages.dataVolumeRequired,
    }),
    communicationOptIn: z.boolean(),
  })
}

export type TalkToExpertFormData = z.infer<
  ReturnType<typeof createTalkToExpertFormSchema>
>
