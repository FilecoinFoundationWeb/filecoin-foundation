export type CategoryId = string
export type CategoryMap = Record<string, string>
export type CategoryCounts = Record<CategoryId, number>

export type CategoryOption = {
  id: CategoryId
  name: string
}

export type CategoryOptionWithCount = CategoryOption & {
  count?: number
}

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
