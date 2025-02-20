import { z } from 'zod'

import { IsoDateSchema, IsoTimeSchema } from '@/schemas/DateTimeSchema'

const ParticipantSchema = z
  .object({
    name: z.string(),
    company: z.string(),
  })
  .strict()

const EventSchema = z
  .object({
    tag: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
    moderators: z.array(ParticipantSchema).nonempty().optional(),
    speakers: z.array(ParticipantSchema).nonempty().optional(),
    'start-time': IsoTimeSchema,
    'end-time': IsoTimeSchema.optional(),
    location: z.string(),
    url: z.string().url().optional(),
  })
  .strict()
  .refine(
    (data) => {
      const { 'end-time': endTime, 'start-time': startTime } = data

      if (!endTime) {
        return true
      }

      return endTime > startTime
    },
    {
      message: 'end-time must be greater than start-time',
      path: ['end-time'],
    },
  )

const EventDaySchema = z
  .object({
    date: IsoDateSchema,
    events: z.array(EventSchema),
  })
  .strict()

export const ScheduleSchema = z
  .object({
    kicker: z.string().optional().default('Join Us'),
    title: z.string().optional().default('Schedule'),
    days: z.array(EventDaySchema),
  })
  .strict()

export type Event = z.infer<typeof EventSchema>
export type Participant = z.infer<typeof ParticipantSchema>
