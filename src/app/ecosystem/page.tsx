import dynamic from 'next/dynamic'

import { usePagination } from '@/hooks/usePagination'
import { useSearch } from '@/hooks/useSearch'
import { useSort } from '@/hooks/useSort'

import { Card } from '@/components/Card'
import { CardLayout } from '@/components/CardLayout'
import { CTASection } from '@/components/CTASection'
import { NoResultsMessage } from '@/components/NoResultsMessage'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { Search } from '@/components/Search'
import { Sort } from '@/components/Sort'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { NextServerSearchParams } from '@/types/searchParams'

import { createMetadata } from '@/utils/createMetadata'
import { getEcosystemProjectsData } from '@/utils/getEcosystemProjectData'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/ecosystem.md'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

const NoSSRPagination = dynamic(
  () => import('@/components/Pagination').then((module) => module.Pagination),
  { ssr: false },
)

const { featured_post: featuredProjectSlug, seo } = attributes

export const metadata = createMetadata(seo, PATHS.ECOSYSTEM.path)

const ecosystemProjects = getEcosystemProjectsData()
const featuredProject = ecosystemProjects.find(
  (project) => project.slug === featuredProjectSlug,
)

const ecosystemPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.ECOSYSTEM.path,
})

type Props = {
  searchParams: NextServerSearchParams
}

const PROJECTS_PER_PAGE = 20

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

  const { pageCount, currentPage, paginatedResults } = usePagination({
    searchParams,
    entries: sortedResults,
    entriesPerPage: PROJECTS_PER_PAGE,
  })

  return (
    <PageLayout>
      <StructuredDataScript structuredData={ecosystemPageBaseData} />
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
        <div className="mt-3 flex justify-end gap-3">
          <Search query={searchQuery} />
          <Sort query={sortQuery} />
        </div>

        {sortedResults.length === 0 ? (
          <NoResultsMessage />
        ) : (
          <>
            <CardLayout type="home">
              {paginatedResults.map((project) => {
                const { slug, title, description, image, category } = project

                return (
                  <Card
                    key={slug}
                    title={title}
                    description={description}
                    image={image}
                    tag={category}
                    entryType="ecosystemProject"
                    cta={{
                      href: `${PATHS.ECOSYSTEM.path}/${slug}`,
                      text: 'Learn More',
                    }}
                  />
                )
              })}
            </CardLayout>

            <div className="mx-auto mt-1 w-full sm:mt-6 sm:w-auto">
              <NoSSRPagination
                pageCount={pageCount}
                currentPage={currentPage}
              />
            </div>
          </>
        )}
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
