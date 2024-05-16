export type CategoryOptionType = 'all' | 'blog' | 'events'

// const categoryIds = blogCategorySettings.map((setting) => setting.id)
// export type BlogCategoryOptionType = (typeof categoryIds)[number] | 'all'

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
