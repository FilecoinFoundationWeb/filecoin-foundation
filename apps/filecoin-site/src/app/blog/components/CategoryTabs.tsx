'use client'

import clsx from 'clsx'

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
            aria-label={`Show ${name} posts`}
            className={clsx(
              'cursor-pointer',
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
