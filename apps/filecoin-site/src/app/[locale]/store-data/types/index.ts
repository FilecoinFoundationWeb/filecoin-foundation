type StorageCategoryFilterSetter = (
  value: Array<string> | ((old: Array<string>) => Array<string>),
) => unknown

export type StorageCategoryFilterProps = {
  activeFilters: Array<string>
  setFilters: StorageCategoryFilterSetter
}
