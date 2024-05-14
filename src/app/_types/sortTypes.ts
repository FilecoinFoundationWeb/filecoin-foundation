export type SortOptionType = 'newest' | 'oldest'

export type SortSetting = {
  id: SortOptionType
  name: string
}

export type SortableByDate = {
  publishedOn?: string
  startDate?: string
}

export type SortEntriesParams<T> = {
  entries: T[]
  dateField: keyof SortableByDate
  sortOption?: SortOptionType
}
