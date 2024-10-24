export function removeDuplicatesFromArray<T extends string>(array: Array<T>) {
  const set = new Set(array)
  return Array.from(set)
}
