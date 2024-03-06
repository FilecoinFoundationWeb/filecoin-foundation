import {
  CMSFieldOption,
  CMSFieldConfig,
  CMSCollectionConfig,
} from '@/types/cmsConfig'

export function getCMSCollection(
  collections: CMSCollectionConfig[] = [],
  collectionName: string
): CMSFieldConfig[] | null {
  const collection = collections.find(
    (collection) => collection.name === collectionName
  )

  if (!collection || !collection.fields) {
    console.error('Collection or fields not found')
    return null
  }

  return collection.fields
}

export function getCMSFieldOptions(
  fields: CMSFieldConfig[] = [],
  fieldName: string
): CMSFieldOption[] {
  const field = fields.find((field) => field.name === fieldName)

  if (!field) {
    throw new Error(`Field "${fieldName}" does not exist.`)
  }

  return field.options ? field.options : []
}
