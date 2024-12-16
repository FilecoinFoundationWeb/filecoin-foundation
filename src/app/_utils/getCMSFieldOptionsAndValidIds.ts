import { type CMSCollectionName } from '@/types/cmsConfig'

import { getCMSFieldOptions, getCollectionConfig } from '@/utils/cmsConfigUtils'
import { mapCMSOptionsToListboxFormat } from '@/utils/mapCMSOptionsToListboxFormat'

export type CMSFieldOptionsAndValidIdsParams = {
  collectionName: CMSCollectionName
  fieldName: string
}

export function getCMSFieldOptionsAndValidIds({
  collectionName,
  fieldName,
}: CMSFieldOptionsAndValidIdsParams) {
  const { fields } = getCollectionConfig(collectionName)
  const cmsOptions = getCMSFieldOptions(fields, fieldName)
  const options = mapCMSOptionsToListboxFormat(cmsOptions)
  const validIds = options.map((setting) => setting.id)

  return { options, validIds }
}
