import { PATHS } from '@/constants/paths'

import { getAllMarkdownData, getMarkdownData } from '@/utils/getMarkdownData'

import { EventFrontMatterSchema } from '@/schemas/event/FrontMatterSchema'

const EVENTS_DIRECTORY_PATH = PATHS.EVENTS.entriesContentPath as string

export function getEventData(slug: string) {
  return getMarkdownData({
    slug,
    directoryPath: EVENTS_DIRECTORY_PATH,
    zodParser: EventFrontMatterSchema.parse,
  })
}

export function getEventsData() {
  return getAllMarkdownData({
    directoryPath: EVENTS_DIRECTORY_PATH,
    zodParser: EventFrontMatterSchema.parse,
  })
}
