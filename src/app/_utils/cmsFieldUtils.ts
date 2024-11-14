import { type CMSCollectionName, type CMSFieldOption } from '@/types/cmsConfig'

import { getCMSFieldOptions, getCollectionConfig } from '@/utils/cmsConfigUtils'

function formatFieldOptions(options: Array<CMSFieldOption>) {
  return options.map((option) => ({
    id: option.value,
    name: option.label,
  }))
}

/**
 * Retrieves and formats field settings for a specified collection and field.
 *
 * @param {CMSCollectionName} collectionName - The name of the CMS collection.
 * @param {string} fieldName - The name of the field within the collection.
 * @returns {{ options: { id: string; name: string }[]; validIds: string[] }}
 * An object containing formatted options for the field and a list of valid IDs.
 */

export function getFieldSettings({
  collectionName,
  fieldName,
}: {
  collectionName: CMSCollectionName
  fieldName: string
}) {
  const { fields } = getCollectionConfig(collectionName)
  const rawOptions = getCMSFieldOptions(fields, fieldName)
  const options = formatFieldOptions(rawOptions)
  const validIds = options.map((setting) => setting.id)

  return { options, validIds }
}
