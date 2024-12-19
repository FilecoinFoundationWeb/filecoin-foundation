import dynamic from 'next/dynamic'

import { BookOpen } from '@phosphor-icons/react/dist/ssr'

import type { NextServerSearchParams } from '@/types/searchParams'

import { PATHS } from '@/constants/paths'
import { CATEGORY_KEY } from '@/constants/searchParams'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { createMetadata } from '@/utils/createMetadata'
import { entryMatchesSubcategoryQuery } from '@/utils/filterUtils'
import { findOrThrow } from '@/utils/findOrThrow'
import { getFrontmatter } from '@/utils/getFrontmatter'
import { getSortOptions } from '@/utils/getSortOptions'

import { BaseFrontmatterSchema } from '@/schemas/FrontmatterSchema'

import { useFilter } from '@/hooks/useFilter'
import { usePagination } from '@/hooks/usePagination'
import { useSearch } from '@/hooks/useSearch'
import { useSort } from '@/hooks/useSort'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { CTASection } from '@/components/CTASection'
import { FilterContainer } from '@/components/FilterContainer'
import { NoSearchResultsMessage } from '@/components/NoSearchResultsMessage'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { ResultsAndReset } from '@/components/ResultsAndReset'
import { Search } from '@/components/Search'
import { Sort } from '@/components/Sort'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { CategoryFilters } from './components/CategoryFilters'
import { CategoryFiltersSlider } from './components/CategoryFiltersSlider'
import { ecosystemProjectsSortConfigs } from './constants/sortConfigs'
import { useEcosystemCategoryTree } from './hooks/useEcosystemCategoryTree'
import { generateStructuredData } from './utils/generateStructuredData'
import { getEcosystemCMSCategories } from './utils/getEcosystemCMSCategories'
import { getEcosystemProjectsData } from './utils/getEcosystemProjectData'
import { parseCategoryQueryParam } from './utils/parseCategoryQueryParam'

const NoSSRPagination = dynamic(
  () => import('@/components/Pagination').then((module) => module.Pagination),
  { ssr: false },
)

type Props = {
  searchParams: NextServerSearchParams
}

const ecosystemProjects = getEcosystemProjectsData()

const sortOptions = getSortOptions(ecosystemProjectsSortConfigs)

const { header, seo } = getFrontmatter({
  path: PATHS.ECOSYSTEM_EXPLORER,
  zodParser: BaseFrontmatterSchema.parse,
})

export const metadata = createMetadata({
  seo: {
    ...seo,
    image: graphicsData.ecosystem.data.src,
  },
  path: PATHS.ECOSYSTEM_EXPLORER.path,
  overrideDefaultTitle: true,
})

const { categories, subcategories } = getEcosystemCMSCategories()

export default function EcosystemExplorer({ searchParams }: Props) {
  const { searchQuery, searchResults } = useSearch({
    searchParams,
    entries: ecosystemProjects,
    searchBy: ['title', 'description'],
  })

  const { sortQuery, sortedResults, defaultSortQuery } = useSort({
    searchParams,
    entries: searchResults,
    configs: ecosystemProjectsSortConfigs,
    defaultsTo: 'a-z',
  })

  const { filteredEntries } = useFilter({
    entries: sortedResults,
    filterQuery: parseCategoryQueryParam(searchParams, CATEGORY_KEY),
    filterFn: entryMatchesSubcategoryQuery,
  })

  const categoryTree = useEcosystemCategoryTree({
    entries: sortedResults,
    categories,
    subcategories,
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    searchParams,
    entries: filteredEntries,
  })

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
            results={<ResultsAndReset results={filteredEntries.length} />}
            category={<CategoryFilters categories={categoryTree} />}
          />
          <FilterContainer.MainWrapper>
            <FilterContainer.DesktopFilters
              searchComponent={<Search query={searchQuery} />}
              sortComponent={
                <Sort
                  query={sortQuery}
                  options={sortOptions}
                  defaultQuery={defaultSortQuery}
                />
              }
            />

            <FilterContainer.MobileFiltersAndResults
              searchComponent={<Search query={searchQuery} />}
              filterComponents={[
                <CategoryFiltersSlider
                  key="category"
                  categories={categoryTree}
                />,
              ]}
              sortComponent={
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
                    {paginatedResults.map((project, i) => {
                      const {
                        slug,
                        title,
                        description,
                        image,
                        subcategory: subcategoryId,
                      } = project

                      const isFirstTwoImages = i < 2
                      const category = findOrThrow(
                        subcategories,
                        ({ value }) => value === subcategoryId,
                      )

                      return (
                        <Card
                          key={slug}
                          title={title}
                          description={description}
                          tags={[{ text: category.label }]}
                          cta={{
                            href: `${PATHS.ECOSYSTEM_EXPLORER.path}/${slug}`,
                            text: 'Learn More',
                            icon: BookOpen,
                          }}
                          image={{
                            ...(image || graphicsData.imageFallback.data),
                            alt: '',
                            objectFit: 'contain',
                            padding: Boolean(image),
                            priority: isFirstTwoImages,
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
        description="If you’re building on Filecoin and don’t see your project, share your details."
        cta={{
          text: 'Submit Your Project',
          href: PATHS.ECOSYSTEM_EXPLORER_PROJECT_FORM.path,
        }}
      />
    </PageLayout>
  )
}
