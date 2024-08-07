import { z } from 'zod'

import { DynamicBaseDataSchema } from '@/schemas/dynamicDataBaseSchema'

export const EventDataSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  category: z.string(),
  description: z.string().optional(),
  location: z.string(),
  externalLink: z.string().url().optional(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
})

export type EventData = z.infer<typeof EventDataSchema>
