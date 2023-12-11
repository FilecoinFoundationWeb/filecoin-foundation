import EventListItem from '@/components/EventListItem'

import { EventData } from '@/types/eventTypes'

type Props = {
  events: EventData[]
  className?: string
}

export default function EventsList({ events, className }: Props) {
  if (events.length === 0) {
    return <p>No events available.</p>
  }

  return (
    <ul className={className}>
      {events.map((event) => (
        <EventListItem key={event.slug} event={event} />
      ))}
    </ul>
  )
}
