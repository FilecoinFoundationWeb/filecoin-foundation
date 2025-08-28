import { getMetaTitleWithSuffix as sharedGetMetaTitleWithSuffix } from '@filecoin-foundation/cypress/utils'

import { ORGANIZATION_NAME_SHORT } from '@/constants/siteMetadata'

export function getMetaTitleWithSuffix(title: string) {
  return sharedGetMetaTitleWithSuffix({
    title,
    organizationName: ORGANIZATION_NAME_SHORT,
  })
}
