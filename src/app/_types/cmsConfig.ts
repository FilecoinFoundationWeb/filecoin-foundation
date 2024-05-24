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

export type CMSFileConfig = {
  name: string
  label: string
  file: string
  fields?: CMSFieldConfig[]
}

export type CMSCollectionConfig = {
  name: string
  label: string
  fields?: CMSFieldConfig[]
}

export type CMSCollectionConfigMainPages = {
  name: string
  label: string
  files?: CMSFileConfig[]
}

export type CMSConfig = {
  collections: CMSCollectionConfig[]
}

export type CMSConfigMainPages = {
  collections: CMSCollectionConfigMainPages[]
}
