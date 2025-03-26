import type { QueryParamValue } from '@filecoin-foundation/utils/types/urlTypes'

type WithCategory = {
  category: string
}

export function entryMatchesCategoryQuery<Entry extends WithCategory>(
  entry: Entry,
  query?: QueryParamValue,
) {
  if (Array.isArray(query)) {
    return query.includes(entry.category)
  }

  return entry.category === query
}
