import {
  getCMSFieldOptionsAndValidIds as sharedGetCMSFieldOptionsAndValidIds,
  type CMSFieldOptionsAndValidIdsParams as SharedCMSFieldOptionsAndValidIdsParams,
} from '@filecoin-foundation/utils/getCMSFieldOptionsAndValidIds'

import type { FFCMSCollectionName } from '@/types/cmsTypes'

import configData from '@/data/cmsConfigSchema.json'

export type CMSFieldOptionsAndValidIdsParams = Omit<
  SharedCMSFieldOptionsAndValidIdsParams<FFCMSCollectionName>,
  'configData'
>

export function getCMSFieldOptionsAndValidIds(
  args: CMSFieldOptionsAndValidIdsParams,
) {
  return sharedGetCMSFieldOptionsAndValidIds<FFCMSCollectionName>({
    configData,
    ...args,
  })
}
