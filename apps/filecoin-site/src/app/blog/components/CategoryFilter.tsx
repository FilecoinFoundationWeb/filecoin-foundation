'use client'

import clsx from 'clsx'

import { SectionDivider } from '@/components/SectionDivider'

import { blogCategories, type BlogCategoryKey } from '../data/blogCategories'

import { RSSFeed } from './RSSFeed'

type CategoryFilterProps = {
  selectedCategory: BlogCategoryKey
  setSelectedCategory: (category: BlogCategoryKey) => void
}

export function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps) {
  return (
    <div className="space-y-10">
      <div className="flex justify-between text-lg">
        <div className="flex flex-wrap gap-x-15 gap-y-10">
          {blogCategories.map(({ id, name }) => {
            const isActive = selectedCategory === id

            return (
              <button
                key={id}
                className={clsx(
                  'cursor-pointer',
                  isActive
                    ? 'text-zinc-950'
                    : 'text-zinc-600 hover:text-zinc-700',
                )}
                onClick={() => setSelectedCategory(id)}
              >
                {name}
              </button>
            )
          })}
        </div>
        <RSSFeed />
      </div>
      <SectionDivider />
    </div>
  )
}
