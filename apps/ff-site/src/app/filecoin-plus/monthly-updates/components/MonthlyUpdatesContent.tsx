'use client'

import { useSearchParams } from 'next/navigation'

import { BookOpenIcon } from '@phosphor-icons/react'

import { useEntryView } from '@filecoin-foundation/hooks/useEntryView'
import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { NoSearchResultsMessage } from '@filecoin-foundation/ui/NoSearchResultsMessage'
import { Pagination, usePagination } from '@filecoin-foundation/ui/Pagination'
import { Search, useSearch } from '@filecoin-foundation/ui/Search'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import {
  PAGE_KEY,
  SEARCH_KEY,
  SORT_KEY,
} from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { getSortOptions } from '@/utils/getSortOptions'

import { Card } from '@/components/Card'
import { Sort } from '@/components/Sort'

import { entryViewConfigs } from '../constants/viewConfigs'
import type { MonthlyUpdate } from '../types/monthlyUpdateType'

type MonthlyUpdatesContentProps = {
  updates: Array<MonthlyUpdate>
}

export function MonthlyUpdatesContent({ updates }: MonthlyUpdatesContentProps) {
  const sortOptions = getSortOptions(entryViewConfigs)
  const clientSearchParams = useSearchParams()
  const searchParams = Object.fromEntries(clientSearchParams.entries())

  const { searchResults } = useSearch({
    searchQuery: normalizeQueryParam(searchParams, SEARCH_KEY),
    entries: updates,
    searchBy: ['title', 'description'],
  })

  const { viewResults } = useEntryView({
    query: normalizeQueryParam(searchParams, SORT_KEY),
    entries: searchResults,
    configs: entryViewConfigs,
  })

  const { pageCount, paginatedResults } = usePagination({
    pageQuery: normalizeQueryParam(searchParams, PAGE_KEY),
    entries: viewResults,
  })

  return (
    <div className="flex w-full flex-col gap-16">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Search />
        <div className="shrink-0 sm:w-40">
          <Sort options={sortOptions} />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {viewResults.length === 0 ? (
          <NoSearchResultsMessage />
        ) : (
          <>
            <CardGrid as="section" cols="smThree">
              {paginatedResults.map((update, i) => {
                const { slug, title, description, image, publishedOn } = update

                const isFirstThreeImages = i < 3

                return (
                  <Card
                    key={slug}
                    as="article"
                    description={{ text: description, isClamped: true }}
                    metaData={[formatDate(publishedOn)]}
                    cta={{
                      href: `${PATHS.FIL_PLUS_MONTHLY_UPDATES.path}/${slug}`,
                      text: 'Read Update',
                      icon: {
                        component: BookOpenIcon,
                      },
                    }}
                    image={{
                      ...(image || graphicsData.imageFallback.data),
                      alt: '',
                      priority: isFirstThreeImages,
                      objectFit: 'cover',
                      sizes: buildImageSizeProp({
                        startSize: '100vw',
                        sm: '350px',
                        md: '320px',
                        lg: '300px',
                      }),
                    }}
                    title={{
                      text: title,
                    }}
                  />
                )
              })}
            </CardGrid>

            <div className="sm:w-fit sm:self-center">
              <Pagination pageCount={pageCount} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
