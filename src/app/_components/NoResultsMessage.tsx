import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import { Heading } from '@/components/Heading'

export function NoResultsMessage() {
  return (
    <div className="flex flex-col items-center gap-4 text-brand-200">
      <span className="grid size-16 place-items-center rounded-full bg-brand-700 text-brand-300">
        <MagnifyingGlass size={24} />
      </span>
      <Heading tag="h3" variant="xl">
        No Results Found
      </Heading>
      <p className="">Try changing your search query.</p>
    </div>
  )
}
