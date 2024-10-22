import { CloudSlash } from '@phosphor-icons/react/dist/ssr'

import { FIL_PLUS_URLS } from '@/constants/siteMetadata'

import { NoResultsMessage } from '@/components/NoResultsMessage'

export function NoDataAvailableMessage() {
  return (
    <NoResultsMessage
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
