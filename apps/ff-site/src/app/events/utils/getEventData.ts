import { isBefore } from 'date-fns'

import { eventCollection } from '@/qino/collections/events'

import { assertEntryExists } from '@/utils/assertEntryExists'
import { camelcaseEntry } from '@/utils/camelcaseEntry'

import { METADATA_TITLE_SUFFIX } from '../constants/metadata'

type EventEntry = Awaited<ReturnType<typeof eventCollection.getEntry>>
type CamelcasedEventEntry = ReturnType<typeof camelcaseEntry<EventEntry>>

export async function getEventData(slug: string) {
  await assertEntryExists(eventCollection, slug)
  const event = await eventCollection.getEntry(slug)
  return transformEventData(event)
}

export async function getEventsData() {
  const events = await eventCollection.getEntries()
  return events.map(transformEventData)
}

function transformEventData(entry: EventEntry) {
  const event = camelcaseEntry(entry)
  validateEndIsAfterStart(event)

  return {
    ...event,
    seo: {
      ...event.seo,
      title: event.seo.title || event.title + METADATA_TITLE_SUFFIX,
    },
  }
}

function validateEndIsAfterStart(event: CamelcasedEventEntry) {
  const { startDate, endDate, program, schedule } = event

  if (endDate && isBefore(endDate, startDate)) {
    throw new Error(
      `${event.title}: end-date ${endDate} must be greater than start-date ${startDate}`,
    )
  }

  if (program) {
    program.events.forEach(({ startDate, endDate }) => {
      if (endDate && isBefore(endDate, startDate)) {
        throw new Error(
          `${event.title}: end-date ${endDate} must be greater than start-date ${startDate}`,
        )
      }
    })
  }

  if (schedule) {
    schedule.days.forEach((day) => {
      day.events.forEach(({ startTime, endTime }) => {
        if (endTime && endTime < startTime) {
          throw new Error(
            `${event.title}: end-time ${endTime} must be greater than start-time ${startTime}`,
          )
        }
      })
    })
  }
}
