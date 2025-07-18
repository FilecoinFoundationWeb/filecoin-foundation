export function toggleArraySelection<Type extends string>(
  selectedItems: Array<Type>,
  newSelection: Type,
) {
  if (selectedItems.includes(newSelection)) {
    return selectedItems.filter((item) => item !== newSelection)
  }
  return [...selectedItems, newSelection]
}
