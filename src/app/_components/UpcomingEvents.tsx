import EventsList from '@/components/EventsList'

import { EventData } from '@/types/eventTypes'

import { getMarkdownData } from '@/utils/getMarkdownData'
import { sortEvents } from '@/utils/sortEvents'

import { CONTENT_PATHS } from '@/constants/paths'

export default function Events() {
  const events: EventData[] = getMarkdownData(
    CONTENT_PATHS.EVENTS.POSTS as string
  )
  const sortedEvents = sortEvents(events)
  const firstTwoEvents = sortedEvents.slice(0, 2)

  return <EventsList events={firstTwoEvents} />
}
