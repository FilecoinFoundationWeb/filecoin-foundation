export type SortOptionItems = 'newest' | 'oldest'

export type SortSetting = {
  id: SortOptionItems
  name: string
}

export type SortableByDate = {
  publishedOn?: string
  startDate?: string
}
