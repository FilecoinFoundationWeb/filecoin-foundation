type EntryWithCount = {
  count: number
}

const COUNT_INITIAL_VALUE = 0

export function sumObjectCounts<Entry extends EntryWithCount>(
  entriesWithCount: Array<Entry>,
) {
  return entriesWithCount.reduce(
    (sum, entry) => sum + entry.count,
    COUNT_INITIAL_VALUE,
  )
}
