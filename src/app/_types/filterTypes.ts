import type { ALL_FILTER_ID } from '@/_constants/filterConstants'

export type FilterConfig<Entry extends Record<string, any>> = {
  filterKey: string
  filterFn: (entry: Entry, query?: string) => boolean
}

export type AllFilterOption = {
  id: typeof ALL_FILTER_ID
  name: string
}
