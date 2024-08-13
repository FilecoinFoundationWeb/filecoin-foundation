import path from 'path'

import dynamic from 'next/dynamic'

import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import { useEventsCategory } from '@/hooks/useEventsCategory'
import { usePagination } from '@/hooks/usePagination'
import { useSearch } from '@/hooks/useSearch'
import { useSort } from '@/hooks/useSort'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { Category } from '@/components/Category'
import { CountAndReset } from '@/components/CountAndReset'
import { FilterContainer } from '@/components/FilterContainer'
import { NoResultsMessage } from '@/components/NoResultsMessage'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { Search } from '@/components/Search'
import { Sort } from '@/components/Sort'
import { StaticImage } from '@/components/StaticImage'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { NextServerSearchParams } from '@/types/searchParams'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import {
  getEventsCategorySettings,
  getCategoryLabel,
} from '@/utils/categoryUtils'
import { createMetadata } from '@/utils/createMetadata'
import { getEventData, getEventsData } from '@/utils/getEventData'
import { getEventMetaData } from '@/utils/getMetaData'
import { getSortSettings } from '@/utils/getSortSettings'
import { isResetCategoryApplied } from '@/utils/getTotalCategoryCount'

import { graphicsData } from '@/data/graphicsData'

import { attributes } from '@/content/pages/events.md'

import { PATHS } from '@/constants/paths'
import { DEFAULT_SORT_OPTION_CRONOLOGICAL } from '@/constants/sortConstants'

import { getInvolvedData } from './data/getInvolvedData'
import { generateStructuredData } from './utils/generateStructuredData'

const NoSSRPagination = dynamic(
  () => import('@/components/Pagination').then((module) => module.Pagination),
  { ssr: false },
)

type Props = {
  searchParams: NextServerSearchParams
}

const events = getEventsData()
const { categorySettings, validCategoryOptions } = getEventsCategorySettings()
const { featured_entry, seo } = attributes

if (!featured_entry) {
  throw new Error('Featured entry is undefined')
}

const featuredEventSlug = path.parse(featured_entry).name
const featuredEvent = getEventData(featuredEventSlug)

export const metadata = createMetadata({
  seo,
  path: PATHS.EVENTS.path,
  overrideDefaultTitle: true,
})

export default function Events({ searchParams }: Props) {
  if (!featuredEvent) {
    throw new Error('Featured event not found')
  }

  const { searchQuery, searchResults } = useSearch({
    searchParams,
    entries: events,
    searchBy: ['title', 'location'],
  })

  const { sortQuery, sortedResults } = useSort({
    searchParams,
    entries: searchResults,
    sortBy: 'startDate',
    sortByDefault: DEFAULT_SORT_OPTION_CRONOLOGICAL,
  })

  const { categoryQuery, categorizedResults, categoryCounts } =
    useEventsCategory({
      searchParams,
      entries: sortedResults,
      validCategoryOptions,
    })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    searchParams,
    entries: categorizedResults,
  })

  const sortSettings = getSortSettings(DEFAULT_SORT_OPTION_CRONOLOGICAL)

  const { 'past-events': _, ...filteredCategoryCounts } = categoryCounts

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        isFeatured
        title={featuredEvent.title}
        description={featuredEvent.description}
        metaData={getEventMetaData(featuredEvent)}
        image={{
          alt: '',
          ...(featuredEvent.image || graphicsData.events1),
          fallback: graphicsData.events1,
        }}
        cta={{
          href: featuredEvent.externalLink
            ? featuredEvent.externalLink
            : `${PATHS.EVENTS.path}/${featuredEventSlug}`,
          text: 'View Event Details',
        }}
      />

      <PageSection kicker="Events" title="Network Events">
        <FilterContainer>
          <FilterContainer.ResultsAndCategoryCompact
            results={
              <CountAndReset
                counts={filteredCategoryCounts}
                isSelected={isResetCategoryApplied(searchParams)}
              />
            }
            category={
              <Category
                query={categoryQuery}
                settings={categorySettings}
                counts={categoryCounts}
              />
            }
          />
          <FilterContainer.MainWrapper>
            <FilterContainer.DesktopFilters
              search={<Search query={searchQuery} id="web-search" />}
              sort={
                <Sort
                  query={sortQuery}
                  sortSettings={sortSettings}
                  defaultSortOption={DEFAULT_SORT_OPTION_CRONOLOGICAL}
                />
              }
            />
            <FilterContainer.MobileFiltersAndResults
              search={<Search query={searchQuery} id="mobile-search" />}
              sort={
                <Sort
                  query={sortQuery}
                  sortSettings={sortSettings}
                  defaultSortOption={DEFAULT_SORT_OPTION_CRONOLOGICAL}
                />
              }
              category={
                <Category
                  query={categoryQuery}
                  settings={categorySettings}
                  counts={categoryCounts}
                />
              }
            />
            <FilterContainer.ContentWrapper>
              {categorizedResults.length === 0 ? (
                <NoResultsMessage />
              ) : (
                <>
                  <CardGrid cols="smTwo">
                    {paginatedResults.map((event, i) => {
                      const {
                        slug,
                        title,
                        image,
                        category,
                        description,
                        externalLink,
                      } = event

                      const isFirstTwoImages = i < 2
                      const shouldLinkToExternalEventsPage =
                        !description && externalLink

                      return (
                        <Card
                          key={slug}
                          title={title}
                          metaData={getEventMetaData(event)}
                          borderColor="brand-400"
                          textIsClamped={true}
                          image={{
                            alt: '',
                            ...(image || {
                              ...graphicsData.imageFallback,
                            }),
                            fallback: graphicsData.imageFallback,
                            sizes: buildImageSizeProp({
                              startSize: '100vw',
                              sm: '350px',
                              md: '450px',
                              lg: '360px',
                            }),
                            padding: isFirstTwoImages,
                          }}
                          cta={{
                            href:
                              shouldLinkToExternalEventsPage ||
                              `${PATHS.EVENTS.path}/${slug}`,
                            text: 'View Event Details',
                            icon: MagnifyingGlass,
                          }}
                          tag={getCategoryLabel({
                            collectionName: 'event_entries',
                            category,
                          })}
                        />
                      )
                    })}
                  </CardGrid>
                  <FilterContainer.PaginationWrapper>
                    <NoSSRPagination
                      pageCount={pageCount}
                      currentPage={currentPage}
                    />
                  </FilterContainer.PaginationWrapper>
                </>
              )}
            </FilterContainer.ContentWrapper>
          </FilterContainer.MainWrapper>
        </FilterContainer>
      </PageSection>

      <PageSection
        kicker="Get Involved"
        title="Get in Touch With the Events Team"
      >
        <CardGrid cols="mdTwo" as="div">
          <div className="row-span-2 h-96 md:h-auto">
            <StaticImage
              {...graphicsData.events2}
              className="h-full rounded-lg object-cover"
              sizes={buildImageSizeProp({ startSize: '100vw', md: '480px' })}
            />
          </div>
          {getInvolvedData.map(({ title, description, cta }) => (
            <div key={title} className="h-48 md:h-56">
              <Card
                title={title}
                description={description}
                cta={cta}
                as="div"
              />
            </div>
          ))}
          <div className="h-48 md:h-56">
            <StaticImage
              {...graphicsData.events3}
              className="h-full rounded-lg object-cover"
              sizes={buildImageSizeProp({ startSize: '100vw', md: '480px' })}
            />
          </div>
        </CardGrid>
      </PageSection>
    </PageLayout>
  )
}
