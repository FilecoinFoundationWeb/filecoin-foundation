import dynamic from 'next/dynamic'
import Image from 'next/image'

import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import type { NextServerSearchParams } from '@/types/searchParams'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import {
  getEventsCategorySettings,
  getCategoryLabel,
} from '@/utils/categoryUtils'
import { createMetadata } from '@/utils/createMetadata'
import { extractSlugFromFilename } from '@/utils/fileUtils'
import { getEventMetaData } from '@/utils/getMetaData'
import { getPageMarkdownData } from '@/utils/getPageMarkdownData'
import { getSortOptions } from '@/utils/getSortOptions'
import { hasNoFiltersApplied } from '@/utils/searchParamsUtils'

import { PageDataWithFeaturedEntrySchema } from '@/schemas/PageDataSchema'

import { useCategory } from '@/hooks/useCategory'
import { usePagination } from '@/hooks/usePagination'
import { useSearch } from '@/hooks/useSearch'
import { useSort } from '@/hooks/useSort'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { Category } from '@/components/Category'
import { CategoryResetButton } from '@/components/CategoryResetButton'
import { FilterContainer } from '@/components/FilterContainer'
import { NoSearchResultsMessage } from '@/components/NoSearchResultsMessage'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { Search } from '@/components/Search'
import { Sort } from '@/components/Sort'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { eventsSortConfigs } from './constants/sortConfigs'
import { getInvolvedData } from './data/getInvolvedData'
import { generateStructuredData } from './utils/generateStructuredData'
import { getEventData, getEventsData } from './utils/getEventData'

const NoSSRPagination = dynamic(
  () => import('@/components/Pagination').then((module) => module.Pagination),
  { ssr: false },
)

type Props = {
  searchParams: NextServerSearchParams
}

const events = getEventsData()
const { categoryOptions, validCategoryIds } = getEventsCategorySettings()

const { featuredEntry: featuredEventPath, seo } = getPageMarkdownData({
  path: PATHS.EVENTS,
  zodParser: PageDataWithFeaturedEntrySchema.parse,
})

const sortOptions = getSortOptions(eventsSortConfigs)

const featuredEventSlug = extractSlugFromFilename(featuredEventPath)
const featuredEvent = getEventData(featuredEventSlug)

export const metadata = createMetadata({
  seo: {
    ...seo,
    image: graphicsData.events1.data.src,
  },
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

  const { sortQuery, sortedResults, defaultSortQuery } = useSort({
    searchParams,
    entries: searchResults,
    configs: eventsSortConfigs,
    defaultsTo: 'all-events',
  })

  const { categoryQuery, categorizedResults, categoryCounts } = useCategory({
    searchParams,
    entries: sortedResults,
    validCategoryIds,
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
          ...(featuredEvent.image || graphicsData.imageFallback.data),
          alt: '',
          objectFit: 'cover',
        }}
        cta={{
          href: `${PATHS.EVENTS.path}/${featuredEventSlug}`,
          text: 'View Event Details',
        }}
      />
      <PageSection kicker="Events" title="Network Events">
        <FilterContainer>
          <FilterContainer.ResultsAndCategory
            results={
              <CategoryResetButton
                counts={categoryCounts}
                isSelected={hasNoFiltersApplied(searchParams)}
              />
            }
            category={
              <Category
                query={categoryQuery}
                options={categoryOptions}
                counts={categoryCounts}
              />
            }
          />
          <FilterContainer.MainWrapper>
            <FilterContainer.DesktopFilters
              search={<Search query={searchQuery} />}
              sort={
                <Sort
                  query={sortQuery}
                  options={sortOptions}
                  defaultQuery={defaultSortQuery}
                />
              }
            />
            <FilterContainer.MobileFiltersAndResults
              search={<Search query={searchQuery} />}
              sort={
                <Sort
                  query={sortQuery}
                  options={sortOptions}
                  defaultQuery={defaultSortQuery}
                />
              }
              category={
                <Category
                  query={categoryQuery}
                  options={categoryOptions}
                  counts={categoryCounts}
                />
              }
            />
            <FilterContainer.ContentWrapper>
              {categorizedResults.length === 0 ? (
                <NoSearchResultsMessage />
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
                        !description && externalLink?.url

                      const tagLabel = getCategoryLabel({
                        collectionName: 'event_entries',
                        category,
                      })

                      return (
                        <Card
                          key={slug}
                          title={title}
                          metaData={getEventMetaData(event)}
                          borderColor="brand-400"
                          textIsClamped={true}
                          tagLabel={tagLabel}
                          image={{
                            ...(image || graphicsData.imageFallback.data),
                            alt: '',
                            priority: isFirstTwoImages,
                            objectFit: 'cover',
                            sizes: buildImageSizeProp({
                              startSize: '100vw',
                              sm: '350px',
                              md: '450px',
                              lg: '360px',
                            }),
                          }}
                          cta={{
                            href:
                              shouldLinkToExternalEventsPage ||
                              `${PATHS.EVENTS.path}/${slug}`,
                            text: 'View Event Details',
                            icon: MagnifyingGlass,
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
            <Image
              src={graphicsData.events2.data}
              alt={graphicsData.events2.alt}
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
            <Image
              src={graphicsData.events3.data}
              alt={graphicsData.events3.alt}
              className="h-full rounded-lg object-cover"
              sizes={buildImageSizeProp({ startSize: '100vw', md: '480px' })}
            />
          </div>
        </CardGrid>
      </PageSection>
    </PageLayout>
  )
}
