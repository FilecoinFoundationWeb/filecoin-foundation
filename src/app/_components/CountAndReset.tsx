'use client'

import clsx from 'clsx'

import { useCategory } from '@/hooks/useCategory'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { DEFAULT_CATEGORY } from '@/components/Category'
import { touchTarget } from '@/components/CategorySelect'

import { getTotalCategoryCount } from '@/utils/getTotalCategoryCount'

type CountAndResetProps = {
  counts?: ReturnType<typeof useCategory>['categoryCounts']
  isSelected: boolean
}

export function CountAndReset({ counts, isSelected }: CountAndResetProps) {
  const { resetSearchParams } = useUpdateSearchParams()

  let totalCount = getTotalCategoryCount(counts || {})

  return (
    <button
      className={clsx(
        '-ml-4 -mt-4 inline-flex items-baseline gap-2 text-pretty rounded-lg py-2 text-left font-bold focus:brand-outline hover:bg-brand-700',
        touchTarget.class,
        {
          'bg-brand-700 text-brand-400': isSelected,
          'bg-transparent text-brand-300': !isSelected,
        },
      )}
      onClick={resetSearchParams}
    >
      <span>{DEFAULT_CATEGORY}</span>
      {totalCount && (
        <span className="text-sm font-light">
          ({totalCount[DEFAULT_CATEGORY]})
        </span>
      )}
    </button>
  )
}
