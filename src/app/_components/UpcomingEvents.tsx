import EventsList from '@/components/EventsList'

import { EventData } from '@/types/eventTypes'

import { getMarkdownData } from '@/utils/getMarkdownData'
import { sortEvents } from '@/utils/sortEvents'

import { PATHS } from '@/constants/paths'

const events: EventData[] = getMarkdownData(
  PATHS.EVENTS.entriesContentPath as string
)
const sortedEvents = sortEvents(events)
const firstTwoEvents = sortedEvents.slice(0, 2)

export function UpcomingEvents() {
  return <EventsList events={firstTwoEvents} />
}
