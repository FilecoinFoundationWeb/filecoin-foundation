import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import type { NextServerSearchParams } from '@/types/searchParams'

import { PATHS } from '@/constants/paths'
import { CATEGORY_KEY, LOCATION_KEY, PAGE_KEY } from '@/constants/searchParams'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { getCategoryLabel } from '@/utils/categoryUtils'
import {
  entryMatchesCategoryQuery,
  entryMatchesLocationQuery,
} from '@/utils/filterUtils'
import { normalizeQueryParam } from '@/utils/queryUtils'

import { useFilter } from '@/hooks/useFilter'
import { useListboxOptions } from '@/hooks/useListboxOptions'
import { usePagination } from '@/hooks/usePagination'
import { useSearch } from '@/hooks/useSearch'
import { useSort } from '@/hooks/useSort'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { CategoryFilter } from '@/components/CategoryFilter'
import { FilterContainer } from '@/components/FilterContainer'
import { LocationFilter } from '@/components/LocationFilter'
import { NoSearchResultsMessage } from '@/components/NoSearchResultsMessage'
import { Pagination } from '@/components/Pagination'
import { Search } from '@/components/Search'

import { EventSort } from '../components/EventSort'
import { DEFAULT_CTA_TEXT, FILTERS_CONFIG } from '../constants/constants'
import { eventsSortConfigs } from '../constants/sortConfigs'
import { getEventsData } from '../utils/getEventData'
import { getLocationListboxOptions } from '../utils/getLocationFilterOptions'
import { getMetaData } from '../utils/getMetaData'

type EventsContentProps = {
  searchParams: NextServerSearchParams
}

const events = getEventsData()
const locationOptions = getLocationListboxOptions()

export default function EventsContent({ searchParams }: EventsContentProps) {
  const { searchQuery, searchResults } = useSearch({
    searchParams,
    entries: events,
    searchBy: ['title', 'location'],
  })

  const { sortedResults } = useSort({
    searchParams,
    entries: searchResults,
    configs: eventsSortConfigs,
    defaultsTo: 'upcoming-events',
  })

  const { filteredEntries: filteredEventsByLocation } = useFilter({
    entries: sortedResults,
    filterQuery: normalizeQueryParam(searchParams, LOCATION_KEY),
    filterFn: entryMatchesLocationQuery,
  })

  const { filteredEntries } = useFilter({
    entries: filteredEventsByLocation,
    filterQuery: normalizeQueryParam(searchParams, CATEGORY_KEY),
    filterFn: entryMatchesCategoryQuery,
  })

  const { optionsWithCount: categoryOptionsWithCount } = useListboxOptions({
    collectionName: FILTERS_CONFIG.category.collectionName,
    fieldName: FILTERS_CONFIG.category.fieldName,
    defaultOption: FILTERS_CONFIG.category.defaultOption,
    entries: filteredEventsByLocation,
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    paginationQuery: normalizeQueryParam(searchParams, PAGE_KEY),
    entries: filteredEntries,
  })

  return (
    <FilterContainer>
      <FilterContainer.ResultsAndCategory
        category={<CategoryFilter options={categoryOptionsWithCount} />}
      />
      <FilterContainer.MainWrapper>
        <FilterContainer.DesktopFilters
          searchComponent={<Search query={searchQuery} />}
          sortComponent={<EventSort />}
          filterComponents={[
            <LocationFilter key="location" options={locationOptions} />,
          ]}
        />
        <FilterContainer.MobileFiltersAndResults
          searchComponent={<Search query={searchQuery} />}
          sortComponent={<EventSort />}
          filterComponents={[
            <CategoryFilter
              key="category"
              options={categoryOptionsWithCount}
            />,
            <LocationFilter key="location" options={locationOptions} />,
          ]}
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
                      tags={[{ text: tagLabel }]}
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
                <Pagination pageCount={pageCount} currentPage={currentPage} />
              </FilterContainer.PaginationWrapper>
            </>
          )}
        </FilterContainer.ContentWrapper>
      </FilterContainer.MainWrapper>
    </FilterContainer>
  )
}
