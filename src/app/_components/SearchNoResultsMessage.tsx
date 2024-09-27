import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import { NoResultsMessage } from '@/components/NoResultsMessage'

export function SearchNoResultsMessage() {
  return (
    <NoResultsMessage icon={MagnifyingGlass} title="No Results Found">
      <p>Try changing your search query.</p>
    </NoResultsMessage>
  )
}
