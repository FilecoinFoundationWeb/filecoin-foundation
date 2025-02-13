import type {
  CMSCollectionConfig,
  CMSConfig,
  CMSFieldConfig,
} from '@/types/cmsConfig'

import configJson from '@/data/cmsConfigSchema.json'

const config: CMSConfig = configJson as CMSConfig

export function getCollectionConfig(collectionName: string): {
  fields: Array<CMSFieldConfig>
} {
  const collection = config.collections.find(
    (col) => col.name === collectionName,
  )

  if (!collection || !collection.fields) {
    throw new Error(
      `${collectionName} collection or fields not found in CMS config`,
    )
  }

  return { fields: collection.fields }
}

export function getCMSCollection(
  collections: Array<CMSCollectionConfig> = [],
  collectionName: string,
) {
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
  fields: Array<CMSFieldConfig> = [],
  fieldName: string,
) {
  const [currentFieldName, ...nestedFieldName] = fieldName.split('.')

  const currentField = fields.find((field) => field.name === currentFieldName)

  if (!currentField) {
    throw new Error(`Field "${fieldName}" does not exist.`)
  }

  if (nestedFieldName.length > 0) {
    return getCMSFieldOptions(currentField.fields, nestedFieldName.join('.'))
  }

  return currentField.options || []
}
