import { VIRTUAL_EVENT_FILTER_OPTION } from '@/events/constants/constants'
import type { Location } from '@/events/schemas/LocationSchema'

type WithLocation = {
  location: Location
}

export function entryMatchesLocationQuery<Entry extends WithLocation>(
  entry: Entry,
  query?: string,
) {
  if (query === VIRTUAL_EVENT_FILTER_OPTION.id) {
    return entry.location.primary === VIRTUAL_EVENT_FILTER_OPTION.name
  }

  return entry.location.region === query
}
