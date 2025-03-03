import {
  getCMSFieldOptions,
  getCollectionConfig,
} from '@filecoin-foundation/utils/cmsConfigUtils'
import type { CMSCollectionName } from '@filecoin-foundation/utils/types/cmsConfig'

import configData from '@/data/cmsConfigSchema.json'

import { mapCMSOptionsToListboxFormat } from '@/utils/mapCMSOptionsToListboxFormat'

export type CMSFieldOptionsAndValidIdsParams = {
  collectionName: CMSCollectionName
  fieldName: string
}

export function getCMSFieldOptionsAndValidIds({
  collectionName,
  fieldName,
}: CMSFieldOptionsAndValidIdsParams) {
  const { fields } = getCollectionConfig(collectionName, configData)
  const cmsOptions = getCMSFieldOptions(fields, fieldName)
  const options = mapCMSOptionsToListboxFormat(cmsOptions)
  const validIds = options.map((setting) => setting.id)

  return { options, validIds }
}
