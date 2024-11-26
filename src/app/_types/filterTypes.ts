export type FilterConfig<Entry extends Record<string, any>> = Record<
  string,
  (entry: Entry, query?: string) => boolean
>
