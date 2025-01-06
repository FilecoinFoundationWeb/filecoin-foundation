export type CMSCollectionName =
  | 'blog_posts'
  | 'ecosystem_projects'
  | 'event_entries'

export type CMSFieldOption = {
  label: string
  value: string
}

export type CMSFieldConfig = {
  label: string,
  name: string,
  widget: string
  fields?: Array<CMSFieldConfig>,
  options?: Array<CMSFieldOption>
  required?: boolean
}

export type CMSCollectionConfig = {
  label: string,
  name: CMSCollectionName,
  fields?: Array<CMSFieldConfig>
}

export type CMSConfig = {
  collections: Array<CMSCollectionConfig>
}
