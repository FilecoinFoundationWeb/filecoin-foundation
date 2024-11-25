export function toggleArrayElement<Value extends string>(
  array: Array<Value>,
  element: Value,
) {
  if (array.includes(element)) {
    return array.filter((item) => item !== element)
  }
  return [...array, element]
}
