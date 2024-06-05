import {
  CMSFieldOption,
  CMSFieldConfig,
  CMSCollectionConfig,
  CMSConfig,
} from '@/types/cmsConfig'

import configJson from '@/data/cmsConfigSchema.json'

const config: CMSConfig = configJson as CMSConfig

export function getCollectionConfig(collectionName: string): {
  fields: CMSFieldConfig[]
} {
  const collection = config.collections.find(
    (col) => col.name === collectionName,
  )

  if (!collection || !collection?.fields) {
    throw new Error(
      `${collectionName} collection or fields not found in CMS config`,
    )
  }

  return { fields: collection.fields as CMSFieldConfig[] }
}

export function getCMSCollection(
  collections: CMSCollectionConfig[] = [],
  collectionName: string,
): CMSFieldConfig[] | null {
  const collection = collections.find(
    (collection) => collection.name === collectionName,
  )

  if (!collection || !collection.fields) {
    console.error('Collection or fields not found')
    return null
  }

  return collection.fields
}

export function getCMSFieldOptions(
  fields: CMSFieldConfig[] = [],
  fieldName: string,
): CMSFieldOption[] {
  const field = fields.find((field) => field.name === fieldName)

  if (!field) {
    throw new Error(`Field "${fieldName}" does not exist.`)
  }

  return field.options ? field.options : []
}
