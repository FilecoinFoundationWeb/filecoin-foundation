type WithCategory = {
  category: string
}

type WithLocation = {
  location: {
    region?: string
  }
}

export function entryMatchesCategoryQuery<Entry extends WithCategory>(
  entry: Entry,
  query?: string,
) {
  return entry.category === query
}

export function entryMatchesLocationQuery<Entry extends WithLocation>(
  entry: Entry,
  query?: string,
) {
  return entry.location.region === query
}
