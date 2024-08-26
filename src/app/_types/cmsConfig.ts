export type CMSCollectionName =
  | 'blog_posts'
  | 'digest'
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
  options?: CMSFieldOption[]
  fields?: CMSFieldConfig[]
}

export type CMSCollectionConfig = {
  name: CMSCollectionName
  label: string
  fields?: CMSFieldConfig[]
}

export type CMSConfig = {
  collections: CMSCollectionConfig[]
}
