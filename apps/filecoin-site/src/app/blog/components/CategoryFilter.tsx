'use client'

import { DEFAULT_FILTER_ID } from '@filecoin-foundation/hooks/useFilter/constants'

import { blogCategories } from '../data/blogCategories'
import { useCategoryState } from '../hooks/useCategoryState'

export function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useCategoryState()

  return (
    <div
      role="group"
      aria-label="Filter blog posts by category"
      className="flex gap-15 text-lg"
    >
      {blogCategories.map(({ id, name }) => {
        const isActive = selectedCategory === id

        return (
          <button
            key={id}
            aria-pressed={isActive}
            className="focus:brand-outline cursor-pointer text-[var(--color-paragraph-text)] hover:text-[var(--color-text-base)] aria-pressed:text-[var(--color-text-base)]"
            aria-label={
              id === DEFAULT_FILTER_ID
                ? 'View all blog posts'
                : `Filter by ${name}`
            }
            onClick={() => {
              setSelectedCategory(id)
            }}
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}
