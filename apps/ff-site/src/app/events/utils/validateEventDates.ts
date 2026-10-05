import { isBefore } from 'date-fns'
import type { z } from 'zod'

type EventDates = {
  title: string
  startDate: string
  endDate?: string
  program?: { events: Array<{ startDate: string; endDate?: string }> }
  schedule?: {
    days: Array<{ events: Array<{ startTime: string; endTime?: string }> }>
  }
}

export function validateEventDates(event: EventDates, ctx: z.RefinementCtx) {
  const { title, startDate, endDate, program, schedule } = event

  function addIssue(message: string) {
    ctx.addIssue({ code: 'custom', message: `${title}: ${message}` })
  }

  if (endDate && isBefore(endDate, startDate)) {
    addIssue(`end-date ${endDate} must be greater than start-date ${startDate}`)
  }

  program?.events.forEach(({ startDate, endDate }) => {
    if (endDate && isBefore(endDate, startDate)) {
      addIssue(
        `end-date ${endDate} must be greater than start-date ${startDate}`,
      )
    }
  })

  schedule?.days.forEach((day) => {
    day.events.forEach(({ startTime, endTime }) => {
      if (endTime && endTime < startTime) {
        addIssue(
          `end-time ${endTime} must be greater than start-time ${startTime}`,
        )
      }
    })
  })
}
