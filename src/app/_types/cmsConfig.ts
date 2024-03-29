export type CMSFieldOption = {
  label: string
  value: string
}

export type CMSFieldConfig = {
  name: string
  label: string
  widget: string
  options?: CMSFieldOption[]
}

export type CMSCollectionConfig = {
  name: string
  label: string
  fields?: CMSFieldConfig[]
}

export type CMSConfig = {
  collections: CMSCollectionConfig[]
}
