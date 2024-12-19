type WithCategory = {
  category: string
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
