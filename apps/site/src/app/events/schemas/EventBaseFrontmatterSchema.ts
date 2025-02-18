import { z } from 'zod'

import { IsoDateSchema } from '@/schemas/DateTimeSchema'

export const EventBaseFrontmatterSchema = z
  .object({
    title: z.string(),
    'start-date': IsoDateSchema,
    'end-date': IsoDateSchema.optional(),
    description: z.string().optional(),
    'external-link': z.string().url().optional(),
  })
  .strict()
