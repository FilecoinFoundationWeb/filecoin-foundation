export function findOrThrow<T>(
  array: Array<T> | ReadonlyArray<T>,
  finderFn: (item: T) => boolean,
): T {
  const found = array.find(finderFn)

  if (!found) {
    throw new Error(`Item not found in array: ${array}`)
  }

  return found
}
