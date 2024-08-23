export type CategoryOption = string
export type CategoryMap = Record<string, string>
export type CategoryCounts = Record<CategoryOption, number>

export type CategorySetting = {
  id: CategoryOption
  name: string
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
