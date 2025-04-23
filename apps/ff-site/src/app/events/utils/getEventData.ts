import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'
import { isBefore } from 'date-fns'

import { PATHS } from '@/constants/paths'

import { METADATA_TITLE_SUFFIX } from '../constants/metadata'
import { EventFrontmatterSchema } from '../schemas/EventFrontmatterSchema'

const EVENTS_DIRECTORY_PATH = PATHS.EVENTS.entriesContentPath as string

export async function getEventData(slug: string) {
  const data = await getEventMarkdownData(slug)
  validateEndIsAfterStart(data)
  return transformEventData(data)
}

export async function getEventsData() {
  const allEvents = await getAllMarkdownData({
    directoryPath: EVENTS_DIRECTORY_PATH,
    zodSchema: EventFrontmatterSchema,
  })

  allEvents.forEach(validateEndIsAfterStart)
  return allEvents.map(transformEventData)
}

function getEventMarkdownData(slug: string) {
  return getMarkdownData({
    slug,
    directoryPath: EVENTS_DIRECTORY_PATH,
    zodSchema: EventFrontmatterSchema,
  })
}

function transformEventData(
  event: Awaited<ReturnType<typeof getEventMarkdownData>>,
) {
  return {
    ...event,
    seo: {
      ...event.seo,
      title: event.seo.title || `${event.title}${METADATA_TITLE_SUFFIX}`,
    },
  }
}

function validateEndIsAfterStart(
  event: Awaited<ReturnType<typeof getEventMarkdownData>>,
) {
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
