export type CategoryOptionType = 'all' | 'blog' | 'events'

export type CategorySetting = {
  id: CategoryOptionType
  name: string
}

// export type CategoryableByDate = {
//   publishedOn?: string
//   startDate?: string
// }

export type CategoryEntriesParams<T> = {
  entries: T[]
  // dateField: keyof CategoryableByDate
  categoryOption?: CategoryOptionType
}
