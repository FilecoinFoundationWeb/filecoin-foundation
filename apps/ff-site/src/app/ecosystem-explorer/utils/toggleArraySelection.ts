export function toggleArraySelection<Value extends string>(
  selectedItems: Array<Value>,
  newSelection: Value,
) {
  if (selectedItems.includes(newSelection)) {
    return selectedItems.filter((item) => item !== newSelection)
  }
  return [...selectedItems, newSelection]
}
