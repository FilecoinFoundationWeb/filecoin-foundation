import { z } from 'zod'

export const EventBaseFrontMatterSchema = z.object({
  title: z.string(),
  'start-date': z.coerce.date(),
  'end-date': z.coerce.date().optional(),
  description: z.string().optional(),
  'external-link': z.string().url().optional(),
})
