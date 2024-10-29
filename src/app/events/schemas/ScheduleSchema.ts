import { z } from 'zod'

const ParticipantSchema = z
  .object({
    name: z.string(),
    company: z.string(),
  })
  .strict()

const EventSchema = z
  .object({
    title: z.string(),
    description: z.string().optional(),
    moderators: z.array(ParticipantSchema).nonempty().optional(),
    speakers: z.array(ParticipantSchema).nonempty().optional(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    location: z.string(),
    url: z.string().url().optional(),
  })
  .strict()

const EventDaySchema = z
  .object({
    date: z.coerce.date(),
    events: z.array(EventSchema),
  })
  .strict()

export const ScheduleSchema = z
  .object({
    title: z.string().optional(),
    days: z.array(EventDaySchema),
  })
  .strict()

export type Event = z.infer<typeof EventSchema>
export type Participant = z.infer<typeof ParticipantSchema>
export type Schedule = z.infer<typeof ScheduleSchema>
