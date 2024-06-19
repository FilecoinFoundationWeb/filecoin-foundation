'use client'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

type ResultsAndResetProps = {
  results?: number
}

export function ResultsAndReset({ results }: ResultsAndResetProps) {
  const { resetSearchParams } = useUpdateSearchParams()

  return (
    <div className="flex items-baseline lg:mb-5 lg:gap-8">
      {results && (
        <span className="inline-flex flex-1 items-center gap-2">
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
        Reset Filters
      </button>
    </div>
  )
}
