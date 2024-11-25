'use client'

import { DEFAULT_CATEGORY } from '@/constants/categoryConstants'

import { getTotalCategoryCountFromOptions } from '@/utils/getTotalCategoryCountFromOptions'

import { useCategory } from '@/hooks/useCategory'
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { CategorySidebar } from '@/components/CategorySidebar'

type CategoryResetButtonProps = {
  categoryOptionsWithCount: ReturnType<
    typeof useCategory
  >['categoryOptionsWithCount']
  isSelected: boolean
}

export function CategoryResetButton({
  categoryOptionsWithCount,
  isSelected,
}: CategoryResetButtonProps) {
  const { resetSearchParams } = useUpdateSearchParams()

  const totalCount = getTotalCategoryCountFromOptions(categoryOptionsWithCount)

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
