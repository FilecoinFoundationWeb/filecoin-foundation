import {
  createMetadata as sharedCreateMetadata,
  type MetadataParams as SharedMetadataParams,
} from '@filecoin-foundation/utils/createMetadata'

import {
  FILECOIN_FOUNDATION_URLS,
  ORGANIZATION_NAME,
} from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

export type MetadataParams = Omit<
  SharedMetadataParams,
  'fallbackImage' | 'orgName' | 'orgHandle'
>

export function createMetadata(args: MetadataParams) {
  return sharedCreateMetadata({
    ...args,
    fallbackImage: graphicsData.home.data.src,
    orgName: ORGANIZATION_NAME,
    orgHandle: FILECOIN_FOUNDATION_URLS.social.twitter.handle,
  })
}
