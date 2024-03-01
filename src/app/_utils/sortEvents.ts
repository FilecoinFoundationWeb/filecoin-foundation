import { EventData } from '@/types/eventTypes'

export function sortEvents(events: EventData[]) {
  return events.sort((a, b) => {
    const dateA = new Date(a.startDate).getTime()
    const dateB = new Date(b.startDate).getTime()

    return dateB - dateA
  })
}
