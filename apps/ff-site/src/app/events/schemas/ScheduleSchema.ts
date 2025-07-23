import { z } from 'zod'

import { IsoDateSchema, IsoTimeSchema } from '@/schemas/DateTimeSchema'

const ParticipantSchema = z.strictObject({
  name: z.string(),
  company: z.string(),
})

const EventSchema = z.strictObject({
  tag: z.string().optional(),
  title: z.string(),
  description: z.string().optional(),
  moderators: z.array(ParticipantSchema).min(1).optional(),
  speakers: z.array(ParticipantSchema).min(1).optional(),
  'start-time': IsoTimeSchema,
  'end-time': IsoTimeSchema.optional(),
  location: z.string(),
  url: z.url().optional(),
})

const EventDaySchema = z.strictObject({
  date: IsoDateSchema,
  events: z.array(EventSchema),
})

export const ScheduleSchema = z.strictObject({
  kicker: z.string().optional().default('Join Us'),
  title: z.string().optional().default('Schedule'),
  days: z.array(EventDaySchema),
})

export type Event = z.infer<typeof EventSchema>
export type Participant = z.infer<typeof ParticipantSchema>
