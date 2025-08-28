import { getMetaTitleTemplate as sharedGetMetaTitleTemplate } from '@filecoin-foundation/cypress/utils'

import { ROOT_METADATA } from '@/constants/siteMetadata'

export function getMetaTitleTemplate(title: string) {
  return sharedGetMetaTitleTemplate({
    title,
    rootMetadata: ROOT_METADATA,
  })
}
