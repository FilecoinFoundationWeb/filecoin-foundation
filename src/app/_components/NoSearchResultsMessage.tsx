import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import { NoResultsMessage } from '@/components/NoResultsMessage'

export function NoSearchResultsMessage() {
  return (
    <NoResultsMessage
      message="Try changing your search query."
      icon={MagnifyingGlass}
      title="No Results Found"
    />
  )
}
