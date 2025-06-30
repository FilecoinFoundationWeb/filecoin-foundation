import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import { NoResultsMessage } from './NoResultsMessage'

type NoSearchResultsMessageProps = {
  children?: React.ReactNode
}

export function NoSearchResultsMessage({
  children,
}: NoSearchResultsMessageProps) {
  return (
    <NoResultsMessage
      icon={MagnifyingGlass}
      title="No Results Found"
      message="Try changing your search query."
    >
      {children}
    </NoResultsMessage>
  )
}
