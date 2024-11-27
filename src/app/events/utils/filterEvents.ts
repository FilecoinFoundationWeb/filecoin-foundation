import type { CategoryId } from '@/types/categoryTypes'

import type { Event } from '../types/eventType'

export function eventMatchesCategory(event: Event, categoryId?: CategoryId) {
  return event.category === categoryId
}

export function eventMatchesLocation(event: Event, locationId?: CategoryId) {
  return event.location.region === locationId
}
