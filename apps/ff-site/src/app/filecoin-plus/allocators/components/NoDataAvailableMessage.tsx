import { NoResultsMessage } from '@filecoin-foundation/ui/NoResultsMessage'
import { CloudSlash } from '@phosphor-icons/react/dist/ssr'

import { BASE_DOMAIN, FIL_PLUS_URLS } from '@/constants/siteMetadata'

export function NoDataAvailableMessage() {
  return (
    <NoResultsMessage
      baseDomain={BASE_DOMAIN}
      title="Allocator Data Unavailable"
      icon={CloudSlash}
      message="We're having trouble fetching the allocator data. For the latest
        information, please check the Allocators list on the Filecoin Plus
        Registry."
      cta={{
        href: FIL_PLUS_URLS.allocators.site,
        text: 'Go to Filecoin Plus Registry',
      }}
    />
  )
}
