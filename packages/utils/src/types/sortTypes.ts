import { VALID_SORT_KEYS } from '@filecoin-foundation/utils/constants/sortConstants'

export type ValidSortKey = (typeof VALID_SORT_KEYS)[number]

export type SortConfig<Entry extends Record<string, any>> = {
  key: ValidSortKey
  label: string
  sortFn: (entries: Array<Entry>) => Array<Entry>
}
