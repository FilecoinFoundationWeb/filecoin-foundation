import dynamic from 'next/dynamic'

import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import { useCategory } from '@/hooks/useCategory'
import { usePagination } from '@/hooks/usePagination'
import { useSearch } from '@/hooks/useSearch'
import { useSort } from '@/hooks/useSort'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { Category } from '@/components/Category'
import { FilterContainer } from '@/components/FilterContainer'
import { NoResultsMessage } from '@/components/NoResultsMessage'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { ResultsAndReset } from '@/components/ResultsAndReset'
import { Search } from '@/components/Search'
import { Sort } from '@/components/Sort'
import { StaticImage } from '@/components/StaticImage'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { EventData } from '@/types/eventTypes'
import { NextServerSearchParams } from '@/types/searchParams'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { getCategorySettings } from '@/utils/categoryUtils'
import { createMetadata } from '@/utils/createMetadata'
import { formatDate } from '@/utils/formatDate'
import { getEventsData } from '@/utils/getEventData'
import { getEventMetaData } from '@/utils/getMetaData'

import { attributes } from '@/content/pages/events.md'

import { PATHS } from '@/constants/paths'
import { DEFAULT_SORT_OPTION } from '@/constants/sortConstants'
import { graphicsData } from '@/data/graphicsData'

import { getInvolvedData } from './data/getInvolvedData'
import { generateStructuredData } from './utils/generateStructuredData'
import { getInvolvementLabel } from './utils/getInvolvementLabel'

const NoSSRPagination = dynamic(
  () => import('@/components/Pagination').then((module) => module.Pagination),
  { ssr: false },
)

type Props = {
  searchParams: NextServerSearchParams
}

const events = getEventsData()
const { categorySettings, validCategoryOptions } = getCategorySettings('events')
const { featured_entry: featuredEventSlug, seo } = attributes
const featuredEvent = events.find((event) => event.slug === featuredEventSlug)

export const metadata = createMetadata({
  seo,
  path: PATHS.EVENTS.path,
  useAbsoluteTitle: true,
})

function prepareMetaData(
  startDate: EventData['startDate'],
  endDate: EventData['endDate'],
) {
  const formattedStartDate = startDate && formatDate(startDate)
  const formattedEndDate = endDate && formatDate(endDate)

  if (formattedStartDate && formattedEndDate) {
    return [`${formattedStartDate} – ${formattedEndDate}`]
  }

  return [formattedStartDate]
}

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
    sortByDefault: DEFAULT_SORT_OPTION,
  })

  const { categoryQuery, categorizedResults, categoryCounts } = useCategory({
    searchParams,
    entries: sortedResults,
    categorizeBy: 'involvement',
    validCategoryOptions: validCategoryOptions,
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    searchParams,
    entries: categorizedResults,
  })

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        isFeatured
        title={featuredEvent.title}
        description={featuredEvent.description}
        metaData={getEventMetaData(featuredEvent)}
        image={{
          type: 'dynamic',
          ...featuredEvent.image,
          src: featuredEvent.image.url,
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
          <FilterContainer.ResultsAndCategory
            results={<ResultsAndReset results={categorizedResults.length} />}
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
              search={<Search query={searchQuery} />}
              sort={<Sort query={sortQuery} />}
            />
            <FilterContainer.MobileFiltersAndResults
              search={<Search query={searchQuery} />}
              sort={<Sort query={sortQuery} />}
              results={<ResultsAndReset results={categorizedResults.length} />}
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
                        involvement,
                        startDate,
                        endDate,
                        description,
                        externalLink,
                      } = event

                      const metaData = prepareMetaData(startDate, endDate)
                      const isFirstTwoImages = i < 2
                      const shouldLinkToExternalEventsPage =
                        !description && externalLink

                      return (
                        <Card
                          key={slug}
                          title={title}
                          tag={getInvolvementLabel(involvement)}
                          metaData={metaData}
                          borderColor="brand-400"
                          textIsClamped={true}
                          cta={{
                            href:
                              shouldLinkToExternalEventsPage ||
                              `${PATHS.EVENTS.path}/${slug}`,
                            text: 'View Event Details',
                            icon: MagnifyingGlass,
                          }}
                          image={{
                            src: image.url,
                            alt: image.alt,
                            priority: isFirstTwoImages,
                            fallback: graphicsData.imageFallback,
                            sizes: buildImageSizeProp({
                              startSize: '100vw',
                              sm: '350px',
                              md: '450px',
                              lg: '360px',
                            }),
                          }}
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
