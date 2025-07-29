import prettyBytes from 'pretty-bytes'
import { z } from 'zod'

import type { OptionType } from '@filecoin-foundation/ui/Listbox/ListboxOption'

import {
  BRIEF_CHARACTER_LIMIT,
  DESCRIPTION_CHARACTER_LIMIT,
  GITHUB_BASE_URL,
  MAX_FILE_SIZE_IN_BYTES,
  TWITTER_BASE_URL,
  X_BASE_URL,
  YOUTUBE_BASE_URL,
} from '../constants'

const invalidUrlMessage = { error: 'Invalid URL format' } as const

const EmptyStringSchema = z.literal('')

const OptionSchema = z
  .object({
    id: z.string(),
    name: z.string(),
  })
  .refine(validateListboxSelected, {
    error: 'Please select an option',
  })

export const EcosystemProjectFormSchema = z.object({
  name: z.string().min(1, { error: 'Your name is required' }),
  email: z
    .email({ error: 'The email format is invalid' })
    .min(1, { error: 'Your email is required' }),
  title: z.string().min(1, { error: 'Your project name is required' }),
  tech: z
    .object({
      filecoin: z.boolean(),
      ipfs: z.boolean(),
    })
    .refine(validateOneTechSelected, {
      error: 'Select at least one technology',
      path: ['root'],
    }),
  yearJoined: OptionSchema,
  briefSummary: z
    .string()
    .min(1, { error: 'The brief summary is required' })
    .max(BRIEF_CHARACTER_LIMIT.max, { error: 'The summary is too long' }),
  networkUseCase: z
    .string()
    .min(DESCRIPTION_CHARACTER_LIMIT.min, {
      error: 'The description is too short',
    })
    .max(DESCRIPTION_CHARACTER_LIMIT.max, {
      error: 'The description is too long',
    }),
  category: OptionSchema,
  logo: z
    .instanceof(File, { error: 'A logo is required' })
    .refine(validateFileSize, {
      error: `Logo size exceeds the limit of ${prettyBytes(MAX_FILE_SIZE_IN_BYTES)}`,
    }),
  websiteUrl: z.url({ error: 'Invalid website URL' }),
  youtubeUrl: z
    .url(invalidUrlMessage)
    .refine(validateYoutubeUrlFormat, {
      error: `URL must start with ${YOUTUBE_BASE_URL}`,
    })
    .optional()
    .or(EmptyStringSchema),
  githubUrl: z
    .url(invalidUrlMessage)
    .refine(validateGithubUrlFormat, {
      error: `URL must start with ${GITHUB_BASE_URL}`,
    })
    .optional()
    .or(EmptyStringSchema),
  xUrl: z
    .url(invalidUrlMessage)
    .refine(validateXUrlFormat, {
      error: `URL must start with ${X_BASE_URL} or ${TWITTER_BASE_URL}`,
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
