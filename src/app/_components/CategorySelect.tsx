'use client'

import clsx from 'clsx'

import {
  type CategoryOption,
  type CategorySetting,
} from '@/types/categoryTypes'

type CategoryListProps = {
  categoryOption: CategoryOption | undefined
  categorySettings: CategorySetting[]
  onCategoryOptionChange: (selectedCategoryOption: CategoryOption) => void
}

const touchTarget = {
  class: 'px-4',
  offsetClass: '-ml-4',
}

export function CategorySelect({
  categoryOption,
  categorySettings,
  onCategoryOptionChange,
}: CategoryListProps) {
  return (
    <ul className={clsx('space-y-4', touchTarget.offsetClass)}>
      {categorySettings.map((option) => {
        const isSelected = categoryOption === option.id

        return (
          <li key={option.id}>
            <button
              className={clsx(
                'cursor-pointer text-pretty rounded-lg py-2 text-left hover:bg-brand-700 focus:outline focus:outline-2 focus:outline-brand-100',
                touchTarget.class,
                {
                  'bg-brand-700 text-brand-400': isSelected,
                  'bg-transparent text-brand-300': !isSelected,
                },
              )}
              onClick={() => onCategoryOptionChange(option.id)}
            >
              {option.name}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
