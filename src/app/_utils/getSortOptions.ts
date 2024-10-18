import type { SortConfig } from '@/types/sortTypes'

export function getSortOptions(config: ReadonlyArray<SortConfig<any>>) {
  return config.map(({ key, label }) => ({
    id: key,
    name: label,
  }))
}
