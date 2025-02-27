import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import { NoResultsMessage } from './NoResultsMessage'

type NoSearchResultsMessageProps = {
  baseDomain: string
}

export function NoSearchResultsMessage({
  baseDomain,
}: NoSearchResultsMessageProps) {
  return (
    <NoResultsMessage
      icon={MagnifyingGlass}
      title="No Results Found"
      message="Try changing your search query."
      baseDomain={baseDomain}
    />
  )
}
