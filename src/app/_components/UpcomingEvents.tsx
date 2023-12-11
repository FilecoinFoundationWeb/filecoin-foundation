import EventsList from '@/components/EventsList'

import { EventData } from '@/types/eventTypes'

import { getMarkdownData } from '@/utils/getMarkdownData'
import { sortEvents } from '@/utils/sortEvents'

export default function Events() {
  const events: EventData[] = getMarkdownData(
    'src/content/events'
  ) as EventData[]
  const sortedEvents = sortEvents(events)
  const firstTwoEvents = sortedEvents.slice(0, 2)

  return <EventsList events={firstTwoEvents} />
}
