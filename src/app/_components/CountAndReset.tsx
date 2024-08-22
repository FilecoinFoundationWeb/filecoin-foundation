'use client'

import { useCategory } from '@/hooks/useCategory'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { DEFAULT_CATEGORY } from '@/components/Category'
import { CategorySelect } from '@/components/CategorySelect'

import { getTotalCategoryCount } from '@/utils/getCountForResetCategory'

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
    <CategorySelect.Container as="div">
      <CategorySelect.Button
        name={DEFAULT_CATEGORY}
        isSelected={isSelected}
        count={totalCount?.[DEFAULT_CATEGORY]}
        handleClick={handleResetClick}
      />
    </CategorySelect.Container>
  )
}
