export type CategoryId = string
export type CategoryMap = Record<string, string>
export type CategoryCounts = Record<CategoryId, number>

export type CategoryOption = {
  id: CategoryId
  name: string
}

export type CategoryYAMLData = {
  name: string
  slug: string
  subcategories: string[]
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
