import { storageCategories } from '../data/storageCategories'

export function getActiveCategories(activeFilters: Array<string>) {
  const activeIds = new Set(activeFilters)
  return storageCategories.filter(({ id }) => activeIds.has(id))
}
