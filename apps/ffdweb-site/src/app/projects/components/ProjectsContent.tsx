'use client'

import { useSearchParams } from 'next/navigation'

import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { Pagination, usePagination } from '@filecoin-foundation/ui/Pagination'
import { Search, useSearch } from '@filecoin-foundation/ui/Search'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import {
  PAGE_KEY,
  SEARCH_KEY,
} from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'

import { CARET_RIGHT } from '@/constants/cardCTAIcons'
import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { getCategoryLabel } from '@/utils/getCategoryLabel'

import { Card } from '@/components/Card'
import { FilterContainer } from '@/components/FilterContainer'

import type { Project } from '../types/ProjectType'

type ProjectsContentProps = {
  projects: Array<Project>
}

export function ProjectsContent({ projects }: ProjectsContentProps) {
  const clientSearchParams = useSearchParams()
  const searchParams = Object.fromEntries(clientSearchParams.entries())

  const { searchQuery, searchResults } = useSearch({
    searchQuery: normalizeQueryParam(searchParams, SEARCH_KEY),
    entries: projects,
    searchBy: ['title', 'description'],
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    pageQuery: normalizeQueryParam(searchParams, PAGE_KEY),
    entries: searchResults,
    entriesPerPage: 12,
  })

  return (
    <FilterContainer
      hasResults={Boolean(paginatedResults.length)}
      top={{ main: <Search query={searchQuery} /> }}
      bottom={<Pagination pageCount={pageCount} currentPage={currentPage} />}
    >
      <CardGrid cols="smTwoLgThree">
        {paginatedResults.map((post, i) => {
          const { slug, title, description, image, publishedOn, category } =
            post

          const isFirstThreeImages = i < 3
          const categoryLabel = getCategoryLabel({
            collectionName: 'projects',
            category,
          })

          return (
            <Card
              key={slug}
              title={title}
              description={{ text: description, isClamped: true }}
              metaData={[formatDate(publishedOn)]}
              tags={[{ text: categoryLabel }]}
              cta={{
                href: `${PATHS.PROJECTS.path}/${slug}`,
                text: 'Read More',
                icon: CARET_RIGHT,
              }}
              image={{
                ...(image || graphicsData.imageFallback.data),
                alt: '',
                priority: isFirstThreeImages,
                objectFit: 'contain',
                aspectRatio: 'square',
                padding: true,
                sizes: buildImageSizeProp({
                  startSize: '100vw',
                  sm: '350px',
                  md: '470px',
                  lg: '360px',
                }),
              }}
            />
          )
        })}
      </CardGrid>
    </FilterContainer>
  )
}
