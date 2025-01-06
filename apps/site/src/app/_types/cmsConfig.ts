export type CMSCollectionName =
  | 'blog_posts'
  | 'ecosystem_projects'
  | 'event_entries'

export type CMSFieldOption = {
  label: string
  value: string
}

export type CMSFieldConfig = {
  name: string
  label: string
  widget: string
  required?: boolean
  options?: Array<CMSFieldOption>
  fields?: Array<CMSFieldConfig>
}

export type CMSCollectionConfig = {
  name: CMSCollectionName
  label: string
  fields?: Array<CMSFieldConfig>
}

export type CMSConfig = {
  collections: Array<CMSCollectionConfig>
}
