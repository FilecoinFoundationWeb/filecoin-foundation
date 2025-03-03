import { slugify } from '@filecoin-foundation/utils/stringUtils'
import type { AnyObject } from '@filecoin-foundation/utils/types/utilTypes'

export function matchesQuery<Entry extends AnyObject>(
  value: Entry[keyof Entry],
  query: string,
) {
  if (typeof value !== 'string' && typeof value !== 'number') {
    return false
  }

  const normalizedValue = slugify(String(value))
  const normalizedQuery = slugify(query)

  return normalizedValue.includes(normalizedQuery)
}
