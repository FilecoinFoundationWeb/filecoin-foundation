'use client'

import { useResetSearchParams } from '@/hooks/useResetSearchParams'

type ResultsAndResetProps = {
  results: number
}

export function ResultsAndReset({ results }: ResultsAndResetProps) {
  const resetSearchParams = useResetSearchParams()

  return (
    <div className="flex items-baseline gap-8">
      <span className="inline-flex flex-1 items-center gap-2">
        <span>Results</span>
        <span className="grid h-5 w-8 place-content-center rounded-[42px] bg-brand-300 p-1 text-xs font-bold text-brand-800">
          {results}
        </span>
      </span>
      <button
        className="inline-flex whitespace-nowrap font-bold text-brand-300 underline"
        onClick={resetSearchParams}
      >
        Reset Filters
      </button>
    </div>
  )
}
