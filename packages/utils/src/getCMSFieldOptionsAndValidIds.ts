import {
  getCMSFieldOptions,
  getCollectionConfig,
} from '@filecoin-foundation/utils/cmsConfigUtils'
import { mapCMSOptionsToListboxFormat } from '@filecoin-foundation/utils/mapCMSOptionsToListboxFormat'
import type { CMSCollectionName } from '@filecoin-foundation/utils/types/cmsConfig'

export type CMSFieldOptionsAndValidIdsParams = {
  collectionName: CMSCollectionName
  fieldName: string
  configData: unknown
}

export function getCMSFieldOptionsAndValidIds({
  collectionName,
  fieldName,
  configData,
}: CMSFieldOptionsAndValidIdsParams) {
  const { fields } = getCollectionConfig(collectionName, configData)
  const cmsOptions = getCMSFieldOptions(fields, fieldName)
  const options = mapCMSOptionsToListboxFormat(cmsOptions)
  const validIds = options.map((setting) => setting.id)

  return { options, validIds }
}
