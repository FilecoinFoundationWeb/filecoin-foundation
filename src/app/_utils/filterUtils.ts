type WithCategory = {
  category: string
}

type WithSubcategory = {
  subcategory: string
}

export function entryMatchesCategoryQuery<Entry extends WithCategory>(
  entry: Entry,
  query?: string,
) {
  return entry.category === query
}

export function entryMatchesSubcategoryQuery<Entry extends WithSubcategory>(
  entry: Entry,
  query?: string,
) {
  return entry.subcategory === query
}
