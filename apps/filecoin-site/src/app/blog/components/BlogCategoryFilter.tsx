import { SectionDivider } from '@/components/SectionDivider'

import type { BlogCategoryFilter } from '../types/blogCatergoryFilterType'

import { CategoryListbox } from './CategoryListbox'
import { CategoryTabs } from './CategoryTabs'
import { RSSFeed } from './RSSFeed'

export function BlogCategoryFilter({
  selectedCategory,
  setSelectedCategory,
}: BlogCategoryFilter) {
  return (
    <div className="space-y-10">
      <div className="flex flex-col items-center justify-between gap-15 sm:flex-row">
        <div className="hidden xl:block">
          <CategoryTabs
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="order-last min-w-48 sm:order-first xl:hidden">
          <CategoryListbox
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="order-first sm:order-last">
          <RSSFeed />
        </div>
      </div>
      <SectionDivider />
    </div>
  )
}
