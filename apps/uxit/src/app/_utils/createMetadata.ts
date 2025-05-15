import {
  createMetadata as sharedCreateMetadata,
  type MetadataParams as SharedMetadataParams,
} from '@filecoin-foundation/utils/createMetadata'

import { ORGANIZATION_NAME } from '@/constants/siteMetadata'

export type MetadataParams = Omit<
  SharedMetadataParams,
  'fallbackImage' | 'orgName' | 'orgHandle'
>

export function createMetadata(args: MetadataParams) {
  return sharedCreateMetadata({
    ...args,
    fallbackImage: '',
    orgName: ORGANIZATION_NAME,
    orgHandle: '@FilFoundation',
  })
}
