'use client'

import { useSearchParams } from 'next/navigation'

import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { Pagination, usePagination } from '@filecoin-foundation/ui/Pagination'
import { Search, useSearch } from '@filecoin-foundation/ui/Search'
import {
  PAGE_KEY,
  SEARCH_KEY,
} from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'
import { CaretRight } from '@phosphor-icons/react'

import { getCategoryLabel } from '@/utils/getCategoryLabel'

import { Card } from '@/components/Card'
import { FilterContainer } from '@/components/FilterContainer'

import type { LearningResource } from '../types/learningResourceType'

type LearningResourcesContentProps = {
  resources: Array<LearningResource>
}

export function LearningResourcesContent({
  resources,
}: LearningResourcesContentProps) {
  const clientSearchParams = useSearchParams()
  const searchParams = Object.fromEntries(clientSearchParams.entries())

  const { searchQuery, searchResults } = useSearch({
    searchQuery: normalizeQueryParam(searchParams, SEARCH_KEY),
    entries: resources,
    searchBy: ['title', 'description'],
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    pageQuery: normalizeQueryParam(searchParams, PAGE_KEY),
    entries: searchResults,
  })

  return (
    <FilterContainer
      hasResults={Boolean(paginatedResults.length)}
      bottom={<Pagination pageCount={pageCount} currentPage={currentPage} />}
      top={{
        main: <Search query={searchQuery} />,
        secondary: <Search query={searchQuery} />,
      }}
      side={{
        desktop: <div className="bg-brand-primary-800 h-full w-full" />,
        mobile: <Search query={searchQuery} />,
      }}
    >
      <CardGrid cols="smTwo">
        {paginatedResults.map((resource) => {
          const { slug, title, description, category, resourceType, link } =
            resource

          const categoryLabel = getCategoryLabel({
            collectionName: 'learning_resources',
            category,
          })

          const resourceTypeLabel = getCategoryLabel({
            collectionName: 'learning_resources',
            category: resourceType,
            fieldName: 'resource-type',
          })

          return (
            <Card
              key={slug}
              title={title}
              description={{ text: description }}
              tags={[{ text: categoryLabel }, { text: resourceTypeLabel }]}
              cta={{
                href: link,
                text: 'View Resource',
                icon: {
                  component: CaretRight,
                  size: 16,
                  position: 'trailing',
                  weight: 'bold',
                },
              }}
            />
          )
        })}
      </CardGrid>
    </FilterContainer>
  )
}
