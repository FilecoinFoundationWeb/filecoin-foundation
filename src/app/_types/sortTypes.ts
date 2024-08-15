export type SortOption = 'newest' | 'oldest'

export type SortSetting = {
  id: SortOption
  name: string
}

export type SortableByDate = {
  publishedOn?: string
  startDate?: string
}
