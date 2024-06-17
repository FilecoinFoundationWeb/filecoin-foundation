'use client'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

type ResultsAndResetProps = {
  results: number
}

export function ResultsAndReset({ results }: ResultsAndResetProps) {
  const { resetSearchParams } = useUpdateSearchParams()

  return (
    <div className="flex items-baseline lg:gap-8">
      <span className="inline-flex flex-1 items-center gap-2">
        <span>Results</span>
        <span className="grid h-5 w-8 place-content-center rounded-[42px] bg-brand-300 p-1 text-xs font-bold text-brand-800">
          {results}
        </span>
      </span>
      <button
        className="focus:brand-outline inline-flex whitespace-nowrap font-bold text-brand-300 underline"
        onClick={resetSearchParams}
      >
        Reset Filters
      </button>
    </div>
  )
}
