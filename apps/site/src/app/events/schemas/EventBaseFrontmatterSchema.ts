import { isAfter } from 'date-fns'
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
  .refine(
    (data) => {
      const { 'end-date': endDate, 'start-date': startDate } = data

      if (!endDate) {
        return true
      }

      return isAfter(endDate, startDate)
    },
    {
      message:
        'end-date must be greater than start-date. If end-date is the same as start-date, leave it empty',
      path: ['end-date'],
    },
  )
