import type { ALL_FILTERS_ID } from '@/constants/filterConstants'

export type CategoryId = string
export type CategoryMap = Record<string, string>

export type CategoryYAMLData = {
  name: string
  slug: string
  subcategories: Array<string>
}

type CMSCategoryField = {
  collection: string
  field: string
}

export type CMSCategoryFieldMapping = {
  blog: CMSCategoryField
  ecosystem: CMSCategoryField
  events: CMSCategoryField
}

export type AllFiltersOptionType = {
  id: typeof ALL_FILTERS_ID
  name: string
}
