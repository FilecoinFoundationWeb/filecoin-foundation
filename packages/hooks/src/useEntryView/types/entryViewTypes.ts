import type { AnyObject } from '@filecoin-foundation/utils/types/utilTypes'

export type EntryViewConfig<Entry extends AnyObject> = {
  id: string
  name: string
  filterOrSortFn: (entries: Array<Entry>) => Array<Entry>
}
