import type { AnyObject } from '@filecoin-foundation/utils/types/utilTypes'

export type SortConfig<Entry extends AnyObject> = {
  id: string
  name: string
  sortFn: (entries: Array<Entry>) => Array<Entry>
}
