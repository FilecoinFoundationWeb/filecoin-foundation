import type { AnyObject } from '@filecoin-foundation/utils/types/utilTypes'

import type { SortConfig } from '@/types/sortTypes'

type PartialSortConfig = Pick<SortConfig<AnyObject>, 'key' | 'label'>

export function getSortOptions(config: ReadonlyArray<PartialSortConfig>) {
  return config.map(({ key, label }) => ({
    id: key,
    name: label,
  }))
}
