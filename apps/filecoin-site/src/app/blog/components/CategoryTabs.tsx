'use client'

import clsx from 'clsx'

import { DEFAULT_FILTER_ID } from '@filecoin-foundation/hooks/useFilter/constants'

import { blogCategories } from '../data/blogCategories'
import { useCategoryState } from '../hooks/useCategoryState'

export function CategoryTabs() {
  const [selectedCategory, setSelectedCategory] = useCategoryState()

  return (
    <div className="flex gap-15 text-lg">
      {blogCategories.map(({ id, name }) => {
        const isActive = selectedCategory === id

        return (
          <button
            key={id}
            aria-pressed={isActive}
            aria-label={
              id === DEFAULT_FILTER_ID
                ? 'View all blog posts'
                : `Filter by ${name}`
            }
            className={clsx(
              'focus:brand-outline cursor-pointer',
              isActive ? 'text-zinc-950' : 'text-zinc-600 hover:text-zinc-950',
            )}
            onClick={() => setSelectedCategory(id)}
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}
