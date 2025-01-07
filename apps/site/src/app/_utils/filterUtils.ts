import { VIRTUAL_EVENT_FILTER_OPTION } from '@/events/constants/constants'

type WithCategory = {
  category: string
}

type WithLocation = {
  location: {
    primary: string
    region?: string | null
  }
}

export function entryMatchesCategoryQuery<Entry extends WithCategory>(
  entry: Entry,
  query?: string | Array<string>,
) {
  if (Array.isArray(query)) {
    return query.includes(entry.category)
  }

  return entry.category === query
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
