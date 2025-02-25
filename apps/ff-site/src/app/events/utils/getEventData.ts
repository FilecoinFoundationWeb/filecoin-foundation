import assert from 'node:assert'

import { isAfter } from 'date-fns'

import { PATHS } from '@/constants/paths'

import { getAllMarkdownData } from '@/utils/getAllMarkdownData'
import { getMarkdownData } from '@/utils/getMarkdownData'

import { METADATA_TITLE_SUFFIX } from '../constants/metadata'
import { EventFrontmatterSchema } from '../schemas/EventFrontmatterSchema'

const EVENTS_DIRECTORY_PATH = PATHS.EVENTS.entriesContentPath as string

export async function getEventData(slug: string) {
  const data = await getEventMarkdownData(slug)
  assertEndIsAfterStart(data)
  return transformEventData(data)
}

export async function getEventsData() {
  const allEvents = await getAllMarkdownData({
    directoryPath: EVENTS_DIRECTORY_PATH,
    zodSchema: EventFrontmatterSchema,
  })

  allEvents.forEach(assertEndIsAfterStart)
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
      title: event.seo.title || `${event.title} ${METADATA_TITLE_SUFFIX}`,
    },
  }
}

function assertEndIsAfterStart(
  event: Awaited<ReturnType<typeof getEventMarkdownData>>,
) {
  const { startDate, endDate, program, schedule } = event

  endDate &&
    assert(
      isAfter(endDate, startDate),
      `${event.title}: end-date ${endDate} must be greater than start-date ${startDate}`,
    )

  if (program) {
    program.events.forEach(({ startDate, endDate }) => {
      endDate &&
        assert(
          isAfter(endDate, startDate),
          `${event.title}: end-date ${endDate} must be greater than start-date ${startDate}`,
        )
    })
  }

  if (schedule) {
    schedule.days.forEach((day) => {
      day.events.forEach(({ startTime, endTime }) => {
        endTime &&
          assert(
            endTime > startTime,
            `${event.title}: end-time ${endTime} must be greater than start-time ${startTime}`,
          )
      })
    })
  }
}
