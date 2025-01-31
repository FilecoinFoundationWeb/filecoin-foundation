import { PATHS } from '@/constants/paths'

import { getAllMarkdownData } from '@/utils/getAllMarkdownData'
import { getMarkdownData } from '@/utils/getMarkdownData'

import { METADATA_TITLE_SUFFIX } from '../constants/metadata'
import { EventFrontmatterSchema } from '../schemas/EventFrontmatterSchema'

const EVENTS_DIRECTORY_PATH = PATHS.EVENTS.entriesContentPath as string

export async function getEventData(slug: string) {
  const data = await getEventMarkdownData(slug)
  return transformEventData(data)
}

export async function getEventsData() {
  const allEvents = await getAllMarkdownData({
    directoryPath: EVENTS_DIRECTORY_PATH,
    zodSchema: EventFrontmatterSchema,
  })

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
