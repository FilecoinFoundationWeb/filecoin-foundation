import { SectionDivider } from '@/components/SectionDivider'

import { CategoryFilter } from './CategoryFilter'
import { CategoryListbox } from './CategoryListbox'
import { RSSFeed } from './RSSFeed'

export function BlogCategoryFilter() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col justify-between gap-15 sm:flex-row sm:items-center">
        <div className="hidden lg:block">
          <CategoryFilter />
        </div>

        <div className="order-last min-w-48 sm:order-first lg:hidden">
          <CategoryListbox />
        </div>
        <div className="order-first sm:order-last">
          <RSSFeed />
        </div>
      </div>
      <SectionDivider />
    </div>
  )
}
