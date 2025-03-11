import {
  getCMSFieldOptionsAndValidIds as sharedGetCMSFieldOptionsAndValidIds,
  type CMSFieldOptionsAndValidIdsParams as SharedCMSFieldOptionsAndValidIdsParams,
} from '@filecoin-foundation/utils/getCMSFieldOptionsAndValidIds'

import type { FFDWebCMSCollectionName } from '@/types/cmsTypes'

import configData from '@/data/cmsConfigSchema.json'

export type CMSFieldOptionsAndValidIdsParams = Omit<
  SharedCMSFieldOptionsAndValidIdsParams<FFDWebCMSCollectionName>,
  'configData'
>

export function getCMSFieldOptionsAndValidIds(
  args: CMSFieldOptionsAndValidIdsParams,
) {
  return sharedGetCMSFieldOptionsAndValidIds<FFDWebCMSCollectionName>({
    configData,
    ...args,
  })
}
