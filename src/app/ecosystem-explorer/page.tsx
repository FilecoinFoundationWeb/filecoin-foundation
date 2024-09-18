import dynamic from 'next/dynamic'

import { BookOpen } from '@phosphor-icons/react/dist/ssr'

import type { NextServerSearchParams } from '@/types/searchParams'

import { PATHS, ECOSYSTEM_CATEGORIES_DIRECTORY_PATH } from '@/constants/paths'
import { DEFAULT_SORT_OPTION } from '@/constants/sortConstants'

import { attributes } from '@/content/pages/ecosystem-explorer/ecosystem-explorer.md'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import {
  getCategoryDataFromDirectory,
  getCategorySettingsFromMap,
} from '@/utils/categoryUtils'
import { createMetadata } from '@/utils/createMetadata'
import { getEcosystemProjectsData } from '@/utils/getEcosystemProjectData'
import { getSortOptions } from '@/utils/getSortOptions'

import { useCategory } from '@/hooks/useCategory'
import { usePagination } from '@/hooks/usePagination'
import { useSearch } from '@/hooks/useSearch'
import { useSort } from '@/hooks/useSort'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { Category } from '@/components/Category'
import { CTASection } from '@/components/CTASection'
import { FilterContainer } from '@/components/FilterContainer'
import { NoResultsMessage } from '@/components/NoResultsMessage'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { ResultsAndReset } from '@/components/ResultsAndReset'
import { Search } from '@/components/Search'
import { Sort } from '@/components/Sort'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { generateStructuredData } from './utils/generateStructuredData'

const NoSSRPagination = dynamic(
  () => import('@/components/Pagination').then((module) => module.Pagination),
  { ssr: false },
)

type Props = {
  searchParams: NextServerSearchParams
}

const ecosystemProjects = getEcosystemProjectsData()

const { header, seo } = attributes

export const metadata = createMetadata({
  image: { src: graphicsData.ecosystem.data.src },
  seo,
  path: PATHS.ECOSYSTEM_EXPLORER.path,
  overrideDefaultTitle: true,
})

const categoryData = getCategoryDataFromDirectory(
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
)

const { categoryOptions, validCategoryIds } =
  getCategorySettingsFromMap(categoryData)

export default function EcosystemExplorer({ searchParams }: Props) {
  const { searchQuery, searchResults } = useSearch({
    searchParams,
    entries: ecosystemProjects,
    searchBy: ['title', 'description'],
  })

  const { sortQuery, sortedResults } = useSort({
    searchParams,
    entries: searchResults,
    sortBy: 'publishedOn',
    defaultSortId: DEFAULT_SORT_OPTION.alphabetical,
  })

  const { categoryQuery, categorizedResults } = useCategory({
    searchParams,
    entries: sortedResults,
    validCategoryIds: validCategoryIds,
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    searchParams,
    entries: categorizedResults,
  })

  const sortOptions = getSortOptions(DEFAULT_SORT_OPTION.alphabetical)

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={header.description}
        image={graphicsData.ecosystem}
        cta={{
          text: 'Submit Your Project',
          href: PATHS.ECOSYSTEM_EXPLORER_PROJECT_FORM.path,
        }}
      />

      <PageSection
        kicker="Projects"
        title="Ecosystem Projects"
        description="Discover the diverse landscape of projects in the Filecoin ecosystem. Inclusion in the Filecoin Ecosystem Explorer is not an endorsement of any project, any company, or any company’s product or services."
      >
        <FilterContainer>
          <FilterContainer.ResultsAndCategory
            gapSize="wide"
            results={<ResultsAndReset results={categorizedResults.length} />}
            category={
              <Category query={categoryQuery} options={categoryOptions} />
            }
          />
          <FilterContainer.MainWrapper>
            <FilterContainer.DesktopFilters
              search={<Search query={searchQuery} id="web-search" />}
              sort={
                <Sort
                  query={sortQuery}
                  options={sortOptions}
                  defaultOption={DEFAULT_SORT_OPTION.alphabetical}
                />
              }
            />
            <FilterContainer.MobileFiltersAndResults
              search={<Search query={searchQuery} id="mobile-search" />}
              results={<ResultsAndReset results={categorizedResults.length} />}
              sort={
                <Sort
                  query={sortQuery}
                  options={sortOptions}
                  defaultOption={DEFAULT_SORT_OPTION.alphabetical}
                />
              }
              category={
                <Category query={categoryQuery} options={categoryOptions} />
              }
            />
            <FilterContainer.ContentWrapper>
              {categorizedResults.length === 0 ? (
                <NoResultsMessage />
              ) : (
                <>
                  <CardGrid cols="smTwo">
                    {paginatedResults.map((project, i) => {
                      const { slug, title, description, image, category } =
                        project

                      const isFirstTwoImages = i < 2

                      return (
                        <Card
                          key={slug}
                          title={title}
                          description={description}
                          tagLabel={categoryData[category]}
                          cta={{
                            href: `${PATHS.ECOSYSTEM_EXPLORER.path}/${slug}`,
                            text: 'Learn More',
                            icon: BookOpen,
                          }}
                          image={{
                            alt: '',
                            ...(image || {
                              ...graphicsData.imageFallback,
                            }),
                            padding: true,
                            priority: isFirstTwoImages,
                            objectFit: 'contain',
                            fallback: graphicsData.imageFallback,
                            sizes: buildImageSizeProp({
                              startSize: '100vw',
                              sm: '320px',
                              md: '440px',
                              lg: '280px',
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

      <CTASection
        title="Become Part of the Expanding Ecosystem"
        description="If you’re building on Filecoin and don’t see your project or want to edit your listing, share your details."
        cta={{
          text: 'Submit Your Project',
          href: PATHS.ECOSYSTEM_EXPLORER_PROJECT_FORM.path,
        }}
      />
    </PageLayout>
  )
}
