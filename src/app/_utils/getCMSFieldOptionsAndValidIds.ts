import { type CMSCollectionName, type CMSFieldOption } from '@/types/cmsConfig'

import { getCMSFieldOptions, getCollectionConfig } from '@/utils/cmsConfigUtils'

type CMSFieldOptionsAndValidIdsParams = {
  collectionName: CMSCollectionName
  fieldName: string
}

export function getCMSFieldOptionsAndValidIds({
  collectionName,
  fieldName,
}: CMSFieldOptionsAndValidIdsParams) {
  const { fields } = getCollectionConfig(collectionName)
  const cmsOptions = getCMSFieldOptions(fields, fieldName)
  const options = mapCMSOptionsToComponentFormat(cmsOptions)
  const validIds = options.map((setting) => setting.id)

  return { options, validIds }
}

function mapCMSOptionsToComponentFormat(options: Array<CMSFieldOption>) {
  return options.map((option) => ({
    id: option.value,
    name: option.label,
  }))
}
