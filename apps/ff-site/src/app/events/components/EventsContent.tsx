
import { NoSearchResultsMessage } from '@filecoin-foundation/ui/NoSearchResultsMessage'
import { Pagination, usePagination } from '@filecoin-foundation/ui/Pagination'
import { Search, useSearch } from '@filecoin-foundation/ui/Search'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import { getCategoryLabel } from '@filecoin-foundation/utils/categoryUtils'
import {
  CATEGORY_KEY,
  LOCATION_KEY,
  PAGE_KEY,
  SEARCH_KEY,
  SORT_KEY,
} from '@filecoin-foundation/utils/constants/urlParamsConstants'
import type { QueryParams } from '@filecoin-foundation/utils/types/urlTypes'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import { PATHS } from '@/constants/paths'
import { BASE_DOMAIN } from '@/constants/siteMetadata'

import configData from '@/data/cmsConfigSchema.json'
import { graphicsData } from '@/data/graphicsData'

import {
  entryMatchesCategoryQuery,
  entryMatchesLocationQuery,
} from '@/utils/filterUtils'

import { useFilter } from '@/hooks/useFilter'
import { useListboxOptions } from '@/hooks/useListboxOptions'
import { useSort } from '@/hooks/useSort'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { CategoryFilter } from '@/components/CategoryFilter'
import { FilterContainer } from '@/components/FilterContainer'
import { LocationFilter } from '@/components/LocationFilter'

import { EventSort } from '../components/EventSort'
import { DEFAULT_CTA_TEXT, FILTERS_CONFIG } from '../constants/constants'
import { eventsSortConfigs } from '../constants/sortConfigs'
import type { Event } from '../types/eventType'
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
  const { searchQuery, searchResults } = useSearch({
    searchQuery: normalizeQueryParam(searchParams, SEARCH_KEY),
    entries: events,
    searchBy: ['title', 'location'],
  })

  const { sortedResults } = useSort({
    sortQuery: normalizeQueryParam(searchParams, SORT_KEY),
    entries: searchResults,
    configs: eventsSortConfigs,
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
            <NoSearchResultsMessage baseDomain={BASE_DOMAIN} />
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
                    configData,
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
