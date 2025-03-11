import type { CMSConfig, CMSFieldConfig } from './types/cmsConfig'

export function getCollectionConfig(
  collectionName: string,
  configData: unknown,
): {
  fields: Array<CMSFieldConfig>
} {
  const config = configData as CMSConfig

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

export function getCMSFieldOptions(
  fields: Array<CMSFieldConfig>,
  fieldName: string,
) {
  const [currentFieldName, ...nestedFieldName] = fieldName.split('.')

  const currentField = fields.find((field) => field.name === currentFieldName)

  if (!currentField) {
    throw new Error(`Field "${fieldName}" does not exist.`)
  }

  if (nestedFieldName.length > 0) {
    return getCMSFieldOptions(
      currentField.fields || [],
      nestedFieldName.join('.'),
    )
  }

  return currentField.options || []
}
