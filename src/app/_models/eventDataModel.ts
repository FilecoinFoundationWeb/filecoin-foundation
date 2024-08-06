import { z } from 'zod'

import { DynamicBaseDataSchema } from '@/models/dynamicDataBaseModel'

import { iso8601StringToDate } from '@/utils/dateUtils'

export const EventDataSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  category: z.string(),
  description: z.string().optional(),
  location: z.string(),
  externalLink: z.string().url().optional(),
  startDate: z.preprocess(iso8601StringToDate, z.date()),
  endDate: z.preprocess(iso8601StringToDate, z.date()).optional(),
})

export type EventData = z.infer<typeof EventDataSchema>
