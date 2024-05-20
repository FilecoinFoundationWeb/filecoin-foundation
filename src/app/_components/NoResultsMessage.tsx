'use client'

import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import { useResetSearchParams } from '@/hooks/useResetSearchParams'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Icon } from '@/components/Icon'

export function NoResultsMessage() {
  const resetSearchParams = useResetSearchParams()

  return (
    <div className="flex flex-col items-center gap-4 text-brand-200">
      <span className="grid size-16 place-items-center rounded-full bg-brand-700 text-brand-300">
        <Icon component={MagnifyingGlass} />
      </span>
      <Heading tag="h3" variant="xl">
        No Results Found
      </Heading>
      <Button onClick={resetSearchParams}>Reset Filters</Button>
    </div>
  )
}
