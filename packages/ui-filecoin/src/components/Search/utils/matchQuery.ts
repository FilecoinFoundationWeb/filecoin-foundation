import s from 'slugify'

import type { AnyObject } from '../../../types/objectTypes'

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

export function slugify(str: string) {
  return s(str, { strict: true, trim: true, lower: true })
}
