import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr'

import { useEntryView } from '@filecoin-foundation/hooks/useEntryView'
import { useFilter } from '@filecoin-foundation/hooks/useFilter'
import { entryMatchesCategoryQuery } from '@filecoin-foundation/hooks/useFilter/utils'
import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { NoSearchResultsMessage } from '@filecoin-foundation/ui/NoSearchResultsMessage'
import { Pagination, usePagination } from '@filecoin-foundation/ui/Pagination'
import { Search, useSearch } from '@filecoin-foundation/ui/Search'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import {
  CATEGORY_KEY,
  LOCATION_KEY,
  PAGE_KEY,
  SEARCH_KEY,
  SORT_KEY,
} from '@filecoin-foundation/utils/constants/urlParamsConstants'
import type { QueryParams } from '@filecoin-foundation/utils/types/urlTypes'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { getCategoryLabel } from '@/utils/getCategoryLabel'

import { useListboxOptions } from '@/hooks/useListboxOptions'

import { Card } from '@/components/Card'
import { CategoryFilter } from '@/components/CategoryFilter'
import { FilterContainer } from '@/components/FilterContainer'
import { LocationFilter } from '@/components/LocationFilter'

import { EventSort } from '../components/EventSort'
import { DEFAULT_CTA_TEXT, FILTERS_CONFIG } from '../constants/constants'
import {
  eventsViewConfigs,
  getDefaultViewConfig,
  getDefaultViewOption,
} from '../constants/viewConfigs'
import type { Event } from '../types/eventType'
import { entryMatchesLocationQuery } from '../utils/filterUtils'
import { getLocationListboxOptions } from '../utils/getLocationFilterOptions'
import { getMetaData } from '../utils/getMetaData'

type EventsContentProps = {
  searchParams: QueryParams
  events: Array<Event>
}

const locationOptions = getLocationListboxOptions()

export default function EventsContent({
  searchParams,
  events,
}: EventsContentProps) {
  const defaultSortOption = getDefaultViewOption(events)

  const { searchResults } = useSearch({
    searchQuery: normalizeQueryParam(searchParams, SEARCH_KEY),
    entries: events,
    searchBy: ['title', 'location'],
  })

  const { viewResults } = useEntryView({
    query: normalizeQueryParam(searchParams, SORT_KEY),
    entries: searchResults,
    configs: eventsViewConfigs,
    defaultConfig: getDefaultViewConfig(events),
  })

  const { filteredEntries: filteredEventsByLocation } = useFilter({
    entries: viewResults,
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

  const { pageCount, paginatedResults } = usePagination({
    pageQuery: normalizeQueryParam(searchParams, PAGE_KEY),
    entries: filteredEntries,
  })

  return (
    <FilterContainer>
      <FilterContainer.ResultsAndCategory
        category={<CategoryFilter options={categoryOptionsWithCount} />}
      />
      <FilterContainer.MainWrapper>
        <FilterContainer.DesktopFilters
          searchComponent={<Search />}
          sortComponent={<EventSort defaultOption={defaultSortOption} />}
          filterComponents={[
            <LocationFilter key="location" options={locationOptions} />,
          ]}
        />
        <FilterContainer.MobileFiltersAndResults
          searchComponent={<Search />}
          sortComponent={<EventSort defaultOption={defaultSortOption} />}
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
              <CardGrid as="section" cols="smTwo">
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
                      as="article"
                      borderColor="light"
                      tags={[{ text: tagLabel }]}
                      description={
                        description
                          ? {
                              text: description,
                              isClamped: true,
                            }
                          : undefined
                      }
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
                        icon: {
                          component: MagnifyingGlassIcon,
                        },
                      }}
                      title={{
                        text: title,
                      }}
                    />
                  )
                })}
              </CardGrid>
              <FilterContainer.PaginationWrapper>
                <Pagination pageCount={pageCount} />
              </FilterContainer.PaginationWrapper>
            </>
          )}
        </FilterContainer.ContentWrapper>
      </FilterContainer.MainWrapper>
    </FilterContainer>
  )
}
