'use client'

import { clsx } from 'clsx'

import {
  type CategoryCounts,
  type CategoryOption,
  type CategorySetting,
} from '@/types/categoryTypes'

type CategorySelectProps = {
  categoryOption: CategoryOption
  categorySettings: CategorySetting[]
  categoryCounts?: CategoryCounts
  onCategoryOptionChange: (selectedCategoryOption: CategoryOption) => void
}

type CategoryListItemProps = {
  name: string
  count?: number
  isSelected: boolean
  handleClick: () => void
}

const touchTarget = {
  class: 'px-4',
  offsetClassY: '-mt-4',
  offsetClassX: '-ml-4',
}

export function CategoryWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ul
      className={clsx(
        'space-y-4',
        touchTarget.offsetClassX,
        touchTarget.offsetClassY,
      )}
    >
      {children}
    </ul>
  )
}

export function CategorySelect({
  categoryOption,
  categorySettings,
  categoryCounts,
  onCategoryOptionChange,
}: CategorySelectProps) {
  return (
    <CategoryWrapper>
      {categorySettings.map((option) => {
        const isSelected = categoryOption === option.id

        const countOrUndefined = categoryCounts
          ? categoryCounts[option.id] || 0
          : undefined

        return (
          <CategoryListItem
            key={option.id}
            name={option.name}
            isSelected={isSelected}
            count={countOrUndefined}
            handleClick={() => onCategoryOptionChange(option.id)}
          />
        )
      })}
    </CategoryWrapper>
  )
}

export function CategoryListItem({
  name,
  count,
  isSelected,
  handleClick,
}: CategoryListItemProps) {
  const hasCount = typeof count === 'number'

  return (
    <li>
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
        onClick={handleClick}
      >
        <span className="text-nowrap">{name}</span>
        {hasCount && <span className="text-sm font-light">({count})</span>}
      </button>
    </li>
  )
}
