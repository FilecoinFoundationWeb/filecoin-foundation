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

type CMSCollectionConfig<CollectionName extends string = string> = {
  name: CollectionName
  label: string
  fields?: Array<CMSFieldConfig>
}

export type CMSConfig<CollectionName extends string = string> = {
  collections: Array<CMSCollectionConfig<CollectionName>>
}
