'use client'

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
            role="tab"
            aria-selected={isActive}
            className="focus:brand-outline cursor-pointer text-[var(--color-paragraph-text)] hover:text-[var(--color-text-base)] aria-selected:text-[var(--color-text-base)]"
            aria-label={
              id === DEFAULT_FILTER_ID
                ? 'View all blog posts'
                : `Filter by ${name}`
            }
            onClick={() => setSelectedCategory(id)}
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}
