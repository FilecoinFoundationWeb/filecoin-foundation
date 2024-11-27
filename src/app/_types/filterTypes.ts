export type FilterConfig<Entry extends Record<string, any>> = {
  filterKey: string
  filterFn: (entry: Entry, query?: string) => boolean
}
