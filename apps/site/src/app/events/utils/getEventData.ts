import { PATHS } from '@/constants/paths'

import { getAllMarkdownData, getMarkdownData } from '@/utils/getMarkdownData'

import { METADATA_TITLE_SUFFIX } from '../constants/metadata'
import { EventFrontmatterSchema } from '../schemas/EventFrontmatterSchema'

const EVENTS_DIRECTORY_PATH = PATHS.EVENTS.entriesContentPath as string

export function getEventData(slug: string) {
  const data = getEventMarkdownData(slug)
  return transformEventData(data)
}

export function getEventsData() {
  const allEvents = getAllMarkdownData({
    directoryPath: EVENTS_DIRECTORY_PATH,
    zodParser: EventFrontmatterSchema.parse,
  })

  return allEvents.map(transformEventData)
}

function getEventMarkdownData(slug: string) {
  return getMarkdownData({
    slug,
    directoryPath: EVENTS_DIRECTORY_PATH,
    zodParser: EventFrontmatterSchema.parse,
  })
}

function transformEventData(event: ReturnType<typeof getEventMarkdownData>) {
  return {
    ...event,
    seo: {
      ...event.seo,
      title: event.seo.title || `${event.title} ${METADATA_TITLE_SUFFIX}`,
    },
  }
}
