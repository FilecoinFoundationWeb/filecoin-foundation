import PageNotFound from '@filecoin-foundation/ui/PageNotFound'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

export default function NotFound() {
  return <PageNotFound baseDomain={BASE_DOMAIN} />
}
