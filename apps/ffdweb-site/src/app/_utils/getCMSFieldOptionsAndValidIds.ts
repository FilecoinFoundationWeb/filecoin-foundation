import {
  getCMSFieldOptionsAndValidIds as sharedGetCMSFieldOptionsAndValidIds,
  type CMSFieldOptionsAndValidIdsParams as SharedCMSFieldOptionsAndValidIdsParams,
} from '@filecoin-foundation/utils/getCMSFieldOptionsAndValidIds'

import configData from '@/data/cmsConfigSchema.json'

export type CMSFieldOptionsAndValidIdsParams = Omit<
  SharedCMSFieldOptionsAndValidIdsParams,
  'configData'
>

export function getCMSFieldOptionsAndValidIds({
  collectionName,
  fieldName,
}: CMSFieldOptionsAndValidIdsParams) {
  return sharedGetCMSFieldOptionsAndValidIds({
    collectionName,
    fieldName,
    configData,
  })
}
