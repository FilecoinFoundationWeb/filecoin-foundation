import dynamic from 'next/dynamic'

import { BookOpen } from '@phosphor-icons/react/dist/ssr'

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
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { type NextServerSearchParams } from '@/types/searchParams'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { getCategorySettings } from '@/utils/categoryUtils'
import { createMetadata } from '@/utils/createMetadata'
import { getBlogPostsData } from '@/utils/getBlogPostData'
import { getBlogPostMetaData } from '@/utils/getMetaData'

import { attributes } from '@/content/pages/blog.md'

import { PATHS } from '@/constants/paths'
import { DEFAULT_SORT_OPTION } from '@/constants/sortConstants'
import { graphicsData } from '@/data/graphicsData'

import { generateStructuredData } from './utils/generateStructuredData'
import { getCategoryLabel } from './utils/getCategoryLabel'

const NoSSRPagination = dynamic(
  () => import('@/components/Pagination').then((module) => module.Pagination),
  { ssr: false },
)

type Props = {
  searchParams: NextServerSearchParams
}

const posts = getBlogPostsData()
const { categorySettings, validCategoryOptions } = getCategorySettings('blog')
const { featured_entry: featuredPostSlug, seo } = attributes
const featuredPost = posts.find((post) => post.slug === featuredPostSlug)

export const metadata = createMetadata({
  seo,
  path: PATHS.BLOG.path,
  useAbsoluteTitle: true,
})

export default function Blog({ searchParams }: Props) {
  if (!featuredPost) {
    throw new Error('Featured post not found')
  }

  const { searchQuery, searchResults } = useSearch({
    searchParams,
    entries: posts,
    searchBy: ['title', 'description'],
  })

  const { sortQuery, sortedResults } = useSort({
    searchParams,
    entries: searchResults,
    sortBy: 'publishedOn',
    sortByDefault: DEFAULT_SORT_OPTION,
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
        structuredData={generateStructuredData(posts, seo)}
      />
      <PageHeader
        isFeatured
        title={featuredPost.title}
        description={featuredPost.description}
        metaData={getBlogPostMetaData(featuredPost.publishedOn)}
        image={{
          type: 'dynamic',
          ...featuredPost.image,
          src: featuredPost.image.url,
          fallback: graphicsData.imageFallback,
        }}
        cta={{
          href: `${PATHS.BLOG.path}/${featuredPostSlug}`,
          text: 'Read Featured Post',
        }}
      />

      <PageSection
        kicker="Blog"
        title="Filecoin Ecosystem Updates"
        description="Read the latest updates and announcements from the Filecoin ecosystem and Filecoin Foundation."
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
              search={<Search query={searchQuery} id="web-search" />}
              sort={<Sort query={sortQuery} />}
            />

            <FilterContainer.MobileFiltersAndResults
              search={<Search query={searchQuery} id="mobile-search" />}
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
                    {paginatedResults.map((post, i) => {
                      const {
                        slug,
                        category,
                        title,
                        description,
                        image,
                        publishedOn,
                      } = post

                      const isFirstTwoImages = i < 2

                      return (
                        <Card
                          key={slug}
                          tag={getCategoryLabel(category)}
                          title={title}
                          description={description}
                          textIsClamped={true}
                          metaData={getBlogPostMetaData(publishedOn)}
                          cta={{
                            href: `${PATHS.BLOG.path}/${slug}`,
                            text: 'Read Post',
                            icon: BookOpen,
                          }}
                          image={{
                            src: image.url,
                            alt: image.alt,
                            fallback: graphicsData.imageFallback,
                            priority: isFirstTwoImages,
                            sizes: buildImageSizeProp({
                              startSize: '100vw',
                              sm: '350px',
                              md: '470px',
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
    </PageLayout>
  )
}
