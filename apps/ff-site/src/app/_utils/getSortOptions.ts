import type { EntryViewConfig } from '@filecoin-foundation/hooks/useEntryView/types'
import type { AnyObject } from '@filecoin-foundation/utils/types/utilTypes'

type PartialSortConfig = Pick<EntryViewConfig<AnyObject>, 'id' | 'name'>

export function getSortOptions(config: ReadonlyArray<PartialSortConfig>) {
  return config.map(({ id, name }) => ({ id, name }))
}
