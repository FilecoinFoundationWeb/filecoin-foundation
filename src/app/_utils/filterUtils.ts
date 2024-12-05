type WithCategory = {
  category: string
}

export function entryMatchesCategoryQuery<Entry extends WithCategory>(
  entry: Entry,
  query?: string,
) {
  return entry.category === query
}
