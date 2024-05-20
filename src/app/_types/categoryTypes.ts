export type CategoryOption = string
export type CategoryMap = Record<string, string>

export type CategorySetting = {
  id: CategoryOption
  name: string
}

export type CategorizableBy = {
  category?: CategoryOption
  involvement?: CategoryOption
}

export type CMSCategoryData = {
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

export type CategoryYAMLData = {
  name: string
  slug: string
  subcategories: string[]
}
