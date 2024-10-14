import { z } from 'zod'

const EventSchema = z
  .object({
    title: z.string(),
    description: z.string(),
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

export type Schedule = z.infer<typeof ScheduleSchema>
