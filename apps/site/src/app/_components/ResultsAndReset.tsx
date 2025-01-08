'use client'

import { clsx } from 'clsx'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

type ResultsAndResetProps = {
  results?: number
}

export function ResultsAndReset({ results }: ResultsAndResetProps) {
  const { resetSearchParams } = useUpdateSearchParams()

  const hasResults = typeof results === 'number'

  return (
    <div
      className={clsx('lg:mt-4 lg:gap-8', hasResults && 'flex items-baseline')}
    >
      {hasResults && (
        <span className="inline-flex items-center gap-2">
          <span>Results</span>
          <span className="grid h-5 w-8 place-content-center rounded-full bg-brand-300 p-1 text-xs font-bold text-brand-800">
            {results}
          </span>
        </span>
      )}
      <button
        className="inline-flex whitespace-nowrap font-bold text-brand-300 underline focus:brand-outline"
        onClick={resetSearchParams}
      >
        Clear Filters
      </button>
    </div>
  )
}
