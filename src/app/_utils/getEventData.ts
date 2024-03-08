import { EventData } from '@/types/eventTypes'

import { mapMarkdownToEventData } from '@/utils/mapMarkdownToEventData'
import { transformMarkdownToCollectionData } from '@/utils/transformMarkdownToCollectionData'
import { transformMarkdownToItemData } from '@/utils/transformMarkdownToItemData'

import { PATHS } from '@/constants/paths'

const EVENTS_COLLECTION_NAME = 'events'
const EVENTS_DIRECTORY_PATH = PATHS.EVENTS.entriesContentPath as string

export function getEventData(slug: string): EventData {
  return transformMarkdownToItemData<EventData>(
    EVENTS_DIRECTORY_PATH,
    EVENTS_COLLECTION_NAME,
    slug,
    mapMarkdownToEventData
  )
}

export function getEventsData(): EventData[] {
  return transformMarkdownToCollectionData<EventData>(
    EVENTS_DIRECTORY_PATH,
    EVENTS_COLLECTION_NAME,
    mapMarkdownToEventData
  )
}
