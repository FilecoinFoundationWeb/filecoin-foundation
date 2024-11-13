import {
  type CMSCollectionName,
  type CMSFieldNames,
  type CMSFieldOption,
} from '@/types/cmsConfig'

import { getCMSFieldOptions, getCollectionConfig } from '@/utils/cmsConfigUtils'

export function transformFieldDataToSettings(options: Array<CMSFieldOption>) {
  return options.map((option) => ({
    id: option.value,
    name: option.label,
  }))
}

export function getFieldData(
  collectionName: CMSCollectionName,
  fieldName: CMSFieldNames,
) {
  const { fields } = getCollectionConfig(collectionName)
  return getCMSFieldOptions({ fields, fieldName })
}

export function getFieldDataTest({
  collectionName,
  fieldName,
}: {
  collectionName: CMSCollectionName
  fieldName: CMSFieldNames
}) {
  const { fields } = getCollectionConfig(collectionName)
  return getCMSFieldOptions({ fields, fieldName })
}
