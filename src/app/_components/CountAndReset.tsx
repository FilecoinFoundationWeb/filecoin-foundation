'use client'

import { useCategory } from '@/hooks/useCategory'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { DEFAULT_CATEGORY } from '@/components/Category'
import { CategoryListItem, CategoryWrapper } from '@/components/CategorySelect'

import { getCountForResetCategory } from '@/utils/getTotalCategoryCount'

type CountAndResetProps = {
  counts: ReturnType<typeof useCategory>['categoryCounts']
  isSelected: boolean
}

export function CountAndReset({ counts, isSelected }: CountAndResetProps) {
  const { resetSearchParams } = useUpdateSearchParams()

  const totalCount = getCountForResetCategory(counts)

  return (
    <CategoryWrapper>
      <CategoryListItem
        name={DEFAULT_CATEGORY}
        isSelected={isSelected}
        count={totalCount?.[DEFAULT_CATEGORY]}
        handleClick={resetSearchParams}
      />
    </CategoryWrapper>
  )
}
