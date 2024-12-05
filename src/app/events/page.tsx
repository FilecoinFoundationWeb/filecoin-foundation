import dynamic from 'next/dynamic'
import Image from 'next/image'

import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import type { NextServerSearchParams } from '@/types/searchParams'

import { DEFAULT_CATEGORY_FILTER_OPTION } from '@/constants/filterConstants'
import { PATHS } from '@/constants/paths'
import { CATEGORY_KEY } from '@/constants/searchParams'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { getCategoryLabel } from '@/utils/categoryUtils'
import { createMetadata } from '@/utils/createMetadata'
import { extractSlugFromFilename } from '@/utils/fileUtils'
import { entryMatchesCategoryQuery } from '@/utils/filterUtils'
import { getFrontmatter } from '@/utils/getFrontmatter'
import { getSortOptions } from '@/utils/getSortOptions'

import { FeaturedPageFrontmatterSchema } from '@/schemas/FrontmatterSchema'

import { useFilter } from '@/hooks/useFilter'
import { useListboxOptions } from '@/hooks/useListboxOptions'
import { usePagination } from '@/hooks/usePagination'
import { useSearch } from '@/hooks/useSearch'
import { useSort } from '@/hooks/useSort'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { CategoryFilter } from '@/components/CategoryFilter'
import { FilterContainer } from '@/components/FilterContainer'
import { NoSearchResultsMessage } from '@/components/NoSearchResultsMessage'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { Search } from '@/components/Search'
import { Sort } from '@/components/Sort'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { DEFAULT_CTA_TEXT } from './constants/constants'
import { eventsSortConfigs } from './constants/sortConfigs'
import { getInvolvedData } from './data/getInvolvedData'
import { generateStructuredData } from './utils/generateStructuredData'
import { getEventData, getEventsData } from './utils/getEventData'
import { getMetaData } from './utils/getMetaData'

const NoSSRPagination = dynamic(
  () => import('@/components/Pagination').then((module) => module.Pagination),
  { ssr: false },
)

type Props = {
  searchParams: NextServerSearchParams
}

const events = getEventsData()

const { featuredEntry: featuredEventPath, seo } = getFrontmatter({
  path: PATHS.EVENTS,
  zodParser: FeaturedPageFrontmatterSchema.parse,
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

  const { filteredEntries } = useFilter({
    searchParams,
    entries: sortedResults,
    filterKey: CATEGORY_KEY,
    filterFn: entryMatchesCategoryQuery,
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    searchParams,
    entries: filteredEntries,
  })

  const categoryOptionsWithCount = useListboxOptions({
    collectionName: 'event_entries',
    fieldName: 'category',
    defaultOption: DEFAULT_CATEGORY_FILTER_OPTION,
    entries: searchResults,
  })

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        isFeatured
        title={featuredEvent.title}
        description={featuredEvent.description}
        metaData={getMetaData({
          startDate: featuredEvent.startDate,
          endDate: featuredEvent.endDate,
          location: featuredEvent.location.primary,
        })}
        image={{
          ...(featuredEvent.image || graphicsData.imageFallback.data),
          alt: '',
          objectFit: 'cover',
        }}
        cta={{
          href: `${PATHS.EVENTS.path}/${featuredEventSlug}`,
          text: DEFAULT_CTA_TEXT,
        }}
      />
      <PageSection kicker="Events" title="Network Events">
        <FilterContainer>
          <FilterContainer.ResultsAndCategory
            category={<CategoryFilter options={categoryOptionsWithCount} />}
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
              category={<CategoryFilter options={categoryOptionsWithCount} />}
              sort={
                <Sort
                  query={sortQuery}
                  options={sortOptions}
                  defaultQuery={defaultSortQuery}
                />
              }
            />
            <FilterContainer.ContentWrapper>
              {filteredEntries.length === 0 ? (
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
                        startDate,
                        endDate,
                        location,
                      } = event

                      const isFirstTwoImages = i < 2
                      const shouldLinkToExternalEventsPage =
                        !description && externalLink

                      const tagLabel = getCategoryLabel({
                        collectionName: 'event_entries',
                        category,
                      })

                      return (
                        <Card
                          key={slug}
                          title={title}
                          borderColor="brand-400"
                          textIsClamped={true}
                          tagLabel={tagLabel}
                          metaData={getMetaData({
                            startDate,
                            endDate,
                            location: location.primary,
                          })}
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
                            text: DEFAULT_CTA_TEXT,
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
