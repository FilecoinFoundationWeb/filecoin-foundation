import { CloudSlash } from '@phosphor-icons/react/dist/ssr'

import { NoResultsMessage } from '@filecoin-foundation/ui/NoResultsMessage'

import { FIL_PLUS_URLS } from '@/constants/siteMetadata'

import { Button } from '@/components/Button'

export function NoDataAvailableMessage() {
  return (
    <NoResultsMessage
      icon={CloudSlash}
      title="Allocator Data Unavailable"
      message="We're having trouble fetching the allocator data. For the latest
        information, please check the Allocators list on the Filecoin Plus
        Registry."
      cta={
        <Button href={FIL_PLUS_URLS.allocators.site}>
          Go to Filecoin Plus Registry
        </Button>
      }
    />
  )
}
