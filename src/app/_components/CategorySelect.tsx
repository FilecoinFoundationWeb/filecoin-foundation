'use client'

import { clsx } from 'clsx'

import {
  type CategoryCounts,
  type CategoryOption,
  type CategorySetting,
} from '@/types/categoryTypes'

type CategoryListProps = {
  categoryOption: CategoryOption
  categorySettings: Array<CategorySetting>
  categoryCounts?: CategoryCounts
  onCategoryOptionChange: (selectedCategoryOption: CategoryOption) => void
}

const touchTarget = {
  class: 'px-4',
  offsetClassY: '-mt-4',
  offsetClassX: '-ml-4',
}

export function CategorySelect({
  categoryOption,
  categorySettings,
  categoryCounts,
  onCategoryOptionChange,
}: CategoryListProps) {
  return (
    <ul
      className={clsx(
        'space-y-4',
        touchTarget.offsetClassX,
        touchTarget.offsetClassY,
      )}
    >
      {categorySettings.map((option) => {
        const isSelected = categoryOption === option.id

        const countOrUndefined = categoryCounts
          ? categoryCounts[option.id] || 0
          : undefined
        const hasCount = typeof countOrUndefined === 'number'

        return (
          <li key={option.id}>
            <button
              className={clsx(
                'text-pretty rounded-lg py-2 text-left font-bold focus:brand-outline hover:bg-brand-700',
                hasCount && 'inline-flex items-baseline gap-2',
                touchTarget.class,
                {
                  'bg-brand-700 text-brand-400': isSelected,
                  'bg-transparent text-brand-300': !isSelected,
                },
              )}
              onClick={() => onCategoryOptionChange(option.id)}
            >
              <span>{option.name}</span>
              {hasCount && (
                <span className="text-sm font-light">({countOrUndefined})</span>
              )}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
