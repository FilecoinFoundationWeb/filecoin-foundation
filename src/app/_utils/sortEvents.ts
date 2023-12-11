import { EventData } from '@/types/eventTypes'

export function sortEvents(events: EventData[]) {
  return events.sort((a, b) => {
    const dateA = new Date(a['f_event-date'] || a['f_start-date']).getTime()
    const dateB = new Date(b['f_event-date'] || b['f_start-date']).getTime()
    return dateB - dateA
  })
}
