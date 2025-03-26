import type { OptionType } from '@filecoin-foundation/ui/Listbox/ListboxOption'
import prettyBytes from 'pretty-bytes'
import { z } from 'zod'


import {
  BRIEF_CHARACTER_LIMIT,
  DESCRIPTION_CHARACTER_LIMIT,
  GITHUB_BASE_URL,
  MAX_FILE_SIZE_IN_BYTES,
  TWITTER_BASE_URL,
  X_BASE_URL,
  YOUTUBE_BASE_URL,
} from '../constants'

const invalidUrlMessage = { message: 'Invalid URL format' } as const

const EmptyStringSchema = z.literal('')

const OptionSchema = z
  .object({
    id: z.string(),
    name: z.string(),
  })
  .refine(validateListboxSelected, {
    message: 'Please select an option',
  })

export const EcosystemProjectFormSchema = z.object({
  name: z.string().min(1, { message: 'Your name is required' }),
  email: z
    .string()
    .min(1, { message: 'Your email is required' })
    .email({ message: 'The email format is invalid' }),
  title: z.string().min(1, { message: 'Your project name is required' }),
  tech: z
    .object({
      filecoin: z.boolean(),
      ipfs: z.boolean(),
    })
    .refine(validateOneTechSelected, {
      message: 'Select at least one technology',
      path: ['root'],
    }),
  yearJoined: OptionSchema,
  briefSummary: z
    .string()
    .min(1, { message: 'The brief summary is required' })
    .max(BRIEF_CHARACTER_LIMIT.max, { message: 'The summary is too long' }),
  networkUseCase: z
    .string()
    .min(DESCRIPTION_CHARACTER_LIMIT.min, {
      message: 'The description is too short',
    })
    .max(DESCRIPTION_CHARACTER_LIMIT.max, {
      message: 'The description is too long',
    }),
  category: OptionSchema,
  logo: z
    .instanceof(File, { message: 'A logo is required' })
    .refine(validateFileSize, {
      message: `Logo size exceeds the limit of ${prettyBytes(MAX_FILE_SIZE_IN_BYTES)}`,
    }),
  websiteUrl: z.string().url({ message: 'Invalid website URL' }),
  youtubeUrl: z
    .string()
    .url(invalidUrlMessage)
    .refine(validateYoutubeUrlFormat, {
      message: `URL must start with ${YOUTUBE_BASE_URL}`,
    })
    .optional()
    .or(EmptyStringSchema),
  githubUrl: z
    .string()
    .url(invalidUrlMessage)
    .refine(validateGithubUrlFormat, {
      message: `URL must start with ${GITHUB_BASE_URL}`,
    })
    .optional()
    .or(EmptyStringSchema),
  xUrl: z
    .string()
    .url(invalidUrlMessage)
    .refine(validateXUrlFormat, {
      message: `URL must start with ${X_BASE_URL} or ${TWITTER_BASE_URL}`,
    })
    .optional()
    .or(EmptyStringSchema),
})

function validateYoutubeUrlFormat(url: string) {
  return url.includes(YOUTUBE_BASE_URL)
}

function validateGithubUrlFormat(url: string) {
  return url.includes(GITHUB_BASE_URL)
}

function validateXUrlFormat(url: string) {
  return url.includes(X_BASE_URL) || url.includes(TWITTER_BASE_URL)
}

function validateFileSize(file: File) {
  return file.size <= MAX_FILE_SIZE_IN_BYTES
}

function validateOneTechSelected(tech: Record<'ipfs' | 'filecoin', boolean>) {
  return tech.filecoin || tech.ipfs
}

function validateListboxSelected(data: OptionType) {
  return data.id && data.name
}
