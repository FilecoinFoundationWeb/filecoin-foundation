'use client'

import clsx from 'clsx'

import { type CategoryOptionType } from '@/types/categoryTypes'

import { blogCategorySettings } from '@/constants/categoryConstants'

type CategoryListProps = {
  categoryOption: CategoryOptionType
  onCategoryOptionChange: (selectedCategoryOption: CategoryOptionType) => void
}

const linkTouchTarget = {
  class: 'px-4',
  offsetClass: '-ml-4',
}

export function CategoryList({
  categoryOption,
  onCategoryOptionChange,
}: CategoryListProps) {
  return (
    <ul className={clsx('space-y-4', linkTouchTarget.offsetClass)}>
      {blogCategorySettings.map((option) => {
        const isSelected = categoryOption === option.id

        return (
          <li key={option.id}>
            <button
              className={clsx(
                'cursor-pointer rounded-lg py-2 hover:bg-brand-700 focus:outline focus:outline-2 focus:outline-brand-100',
                linkTouchTarget.class,
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
