import { CloudSlash } from '@phosphor-icons/react/dist/ssr'

import { NoResultsMessage } from '@/components/NoResultsMessage'

export function NoFilterResults() {
  return (
    <div className="flex w-full justify-center">
      <NoResultsMessage
        title="No Results"
        icon={CloudSlash}
        message="No allocators match your search at the moment. Try a different search or check back later."
      />
    </div>
  )
}
