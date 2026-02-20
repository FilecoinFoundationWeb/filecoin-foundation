'use client'

import { useTranslations } from 'next-intl'

import { DEFAULT_FILTER_ID } from '@filecoin-foundation/hooks/useFilter/constants'

import { blogCategories } from '../data/blogCategories'
import { useCategoryState } from '../hooks/useCategoryState'

export function CategoryFilter() {
  const t = useTranslations('/blog')
  const [selectedCategory, setSelectedCategory] = useCategoryState()

  return (
    <div
      role="group"
      aria-label={t('categoryFilter.groupAriaLabel')}
      className="flex gap-15 text-lg"
    >
      {blogCategories.map(({ id }) => {
        const isActive = selectedCategory === id
        const displayName = t(`categories.${id}`)

        return (
          <button
            key={id}
            aria-pressed={isActive}
            className="focus:brand-outline cursor-pointer text-[var(--color-paragraph-text)] hover:text-[var(--color-text-base)] aria-pressed:text-[var(--color-text-base)]"
            aria-label={
              id === DEFAULT_FILTER_ID
                ? t('categoryFilter.viewAllAriaLabel')
                : t('categoryFilter.filterByAriaLabel', { name: displayName })
            }
            onClick={() => setSelectedCategory(id)}
          >
            {displayName}
          </button>
        )
      })}
    </div>
  )
}
