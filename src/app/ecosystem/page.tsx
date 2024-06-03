import dynamic from 'next/dynamic'

import { BookOpen } from '@phosphor-icons/react/dist/ssr'

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

import { NextServerSearchParams } from '@/types/searchParams'

import {
  getCategoryDataFromDirectory,
  getCategorySettingsFromMap,
} from '@/utils/categoryUtils'
import { createMetadata } from '@/utils/createMetadata'
import { getEcosystemProjectsData } from '@/utils/getEcosystemProjectData'

import { attributes } from '@/content/pages/ecosystem.md'

import { PATHS, ECOSYSTEM_CATEGORIES_DIRECTORY_PATH } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { generateEcosystemPageStructuredData } from './structuredData'

const NoSSRPagination = dynamic(
  () => import('@/components/Pagination').then((module) => module.Pagination),
  { ssr: false },
)

type Props = {
  searchParams: NextServerSearchParams
}

const ecosystemProjects = getEcosystemProjectsData()
const { featured_entry: featuredProjectSlug, seo } = attributes
const featuredProject = ecosystemProjects.find(
  (project) => project.slug === featuredProjectSlug,
)
export const metadata = createMetadata({ seo, path: PATHS.ECOSYSTEM.path })

const categoryData = getCategoryDataFromDirectory(
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
)
const { categorySettings, validCategoryOptions } =
  getCategorySettingsFromMap(categoryData)

export default function Ecosystem({ searchParams }: Props) {
  if (!featuredProject) {
    throw new Error('Featured project not found')
  }

  const { searchQuery, searchResults } = useSearch({
    searchParams,
    entries: ecosystemProjects,
    searchBy: ['title', 'description'],
  })

  const { sortQuery, sortedResults } = useSort({
    searchParams,
    entries: searchResults,
    sortBy: 'publishedOn',
    sortByDefault: 'newest',
  })

  const { categoryQuery, categorizedResults, categoryCounts } = useCategory({
    searchParams,
    entries: sortedResults,
    categorizeBy: 'category',
    validCategoryOptions: validCategoryOptions,
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    searchParams,
    entries: categorizedResults,
  })

  return (
    <PageLayout>
      <StructuredDataScript
        structuredData={generateEcosystemPageStructuredData(seo)}
      />
      <PageHeader
        isFeatured
        containImageSize
        title={featuredProject.title}
        description={featuredProject.description}
        image={featuredProject.image}
        cta={{
          href: `${PATHS.ECOSYSTEM.path}/${featuredProjectSlug}`,
          text: 'Learn More About the Project',
        }}
      />

      <PageSection
        kicker="Projects"
        title="Ecosystem Projects"
        description="Discover the diverse landscape of Filecoin projects. Inclusion in the Filecoin Ecosystem Explorer is not an endorsement of any project, any company, or any company’s products or services."
      >
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
                    {paginatedResults.map((project) => {
                      const { slug, title, description, image, category } =
                        project

                      return (
                        <Card
                          key={slug}
                          title={title}
                          description={description}
                          image={image}
                          tag={categoryData[category]}
                          entryType="ecosystemProject"
                          cta={{
                            href: `${PATHS.ECOSYSTEM.path}/${slug}`,
                            text: 'Learn More',
                            icon: BookOpen,
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
          href: FILECOIN_FOUNDATION_URLS.ecosystem.submitOrUpdateProjectForm,
          text: 'Submit or Update Your Project',
        }}
      />
    </PageLayout>
  )
}
