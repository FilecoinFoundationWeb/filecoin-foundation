import { z } from 'zod'

export const EventBaseFrontmatterSchema = z
  .object({
    title: z.string(),
    'start-date': z.date(),
    'end-date': z.date().optional(),
    description: z.string().optional(),
    'external-link': z.string().url().optional(),
  })
  .strict()
