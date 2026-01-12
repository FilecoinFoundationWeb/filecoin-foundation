import { Heading } from '@filecoin-foundation/ui/Heading'

export function NoSearchResults() {
  return (
    <div className="flex flex-col items-center gap-2">
      <Heading tag="h3" variant="xl">
        No Results Found
      </Heading>
      <p>Try changing your search query.</p>
    </div>
  )
}
