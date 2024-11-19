import { type CMSCollectionName, type CMSFieldOption } from '@/types/cmsConfig'

import { getCMSFieldOptions, getCollectionConfig } from '@/utils/cmsConfigUtils'

function formatFieldOptions(options: Array<CMSFieldOption>) {
  return options.map((option) => ({
    id: option.value,
    name: option.label,
  }))
}

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
