export const ALL_FILTER_ID = 'all'

export type FilterOption = {
  id: typeof ALL_FILTER_ID
  name: string
}

export const ALL_CATEGORIES_OPTION: FilterOption = {
  id: ALL_FILTER_ID,
  name: 'All Categories',
}
export const ALL_LOCATIONS_OPTION: FilterOption = {
  id: ALL_FILTER_ID,
  name: 'All Locations',
}
