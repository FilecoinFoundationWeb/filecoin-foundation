'use client'

import { useCategory } from '@/hooks/useCategory'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { CategorySidebar } from '@/components/CategorySidebar'

import { getTotalCategoryCount } from '@/utils/getTotalCategoryCount'

import { DEFAULT_CATEGORY } from '@/constants/categoryConstants'

type CategoryResetButtonProps = {
  counts: ReturnType<typeof useCategory>['categoryCounts']
  isSelected: boolean
}

export function CategoryResetButton({
  counts,
  isSelected,
}: CategoryResetButtonProps) {
  const { resetSearchParams } = useUpdateSearchParams()
  const totalCount = getTotalCategoryCount(counts)

  function handleResetClick() {
    resetSearchParams()
  }

  return (
    <CategorySidebar.Container as="div">
      <CategorySidebar.Button
        name={DEFAULT_CATEGORY}
        isSelected={isSelected}
        count={totalCount?.[DEFAULT_CATEGORY]}
        handleClick={handleResetClick}
      />
    </CategorySidebar.Container>
  )
}