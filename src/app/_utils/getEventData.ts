import { convertMarkdownToEventData } from '@/utils/convertMarkdownToEventData'
import { getData, getAllData } from '@/utils/getData'

import { PATHS } from '@/constants/paths'

const EVENTS_DIRECTORY_PATH = PATHS.EVENTS.entriesContentPath as string

export function getEventData(slug: string) {
  return getData(EVENTS_DIRECTORY_PATH, convertMarkdownToEventData, slug)
}

export function getEventsData() {
  return getAllData(EVENTS_DIRECTORY_PATH, convertMarkdownToEventData)
}
