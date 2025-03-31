type WithResourceType = {
  resourceType: string
}

export function entryMatchesResourceQuery<Entry extends WithResourceType>(
  entry: Entry,
  query?: string,
) {
  return entry.resourceType === query
}
