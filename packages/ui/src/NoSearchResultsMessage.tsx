import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr'

import { Button } from '@filecoin-foundation/ui/Button'
import { NoResultsMessage } from '@filecoin-foundation/ui/NoResultsMessage'

type NoSearchResultsMessageProps = {
  cta?: React.ReactElement<typeof Button>
}

export function NoSearchResultsMessage({ cta }: NoSearchResultsMessageProps) {
  return (
    <NoResultsMessage
      icon={MagnifyingGlassIcon}
      title="No Results Found"
      message="Try changing your search query."
      cta={cta}
    />
  )
}
