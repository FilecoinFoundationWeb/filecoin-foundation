export type SortOptionCronological = 'newest' | 'oldest'
export type SortOptionAlphabetical = 'a-z' | 'z-a'

export type SortOption = SortOptionCronological | SortOptionAlphabetical

export type SortSetting = {
  id: SortOption
  name: string
}

export type SortableByDate = {
  publishedOn?: string | Date
  startDate?: string | Date
}
