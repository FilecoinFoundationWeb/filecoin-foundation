import {
  createMetadata as sharedCreateMetadata,
  type MetadataParams as SharedMetadataParams,
} from '@filecoin-foundation/utils/createMetadata'

import { FFDW_URLS, ORGANIZATION_NAME } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

export type MetadataParams = Omit<
  SharedMetadataParams,
  'fallbackImage' | 'orgName' | 'orgHandle'
>

export function createMetadata(args: MetadataParams) {
  return sharedCreateMetadata({
    ...args,
    fallbackImage: graphicsData.homepage.data.src,
    orgName: ORGANIZATION_NAME,
    orgHandle: FFDW_URLS.social.twitter.handle,
  })
}
