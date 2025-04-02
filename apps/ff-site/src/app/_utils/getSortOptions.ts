import type { SortConfig } from '@filecoin-foundation/hooks/useSort/types'
import type { AnyObject } from '@filecoin-foundation/utils/types/utilTypes'

type PartialSortConfig = Pick<SortConfig<AnyObject>, 'id' | 'name'>

export function getSortOptions(config: ReadonlyArray<PartialSortConfig>) {
  return config.map(({ id, name }) => ({ id, name }))
}
