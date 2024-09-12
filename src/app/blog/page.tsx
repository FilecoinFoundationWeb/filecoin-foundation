import path from 'path'

import dynamic from 'next/dynamic'

import { BookOpen } from '@phosphor-icons/react/dist/ssr'

import { type NextServerSearchParams } from '@/types/searchParams'

import { PATHS } from '@/constants/paths'
import { DEFAULT_SORT_OPTION } from '@/constants/sortConstants'

import { attributes } from '@/content/pages/blog.md'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { getCategorySettings, getCategoryLabel } from '@/utils/categoryUtils'
import { createMetadata } from '@/utils/createMetadata'
import { getBlogPostData, getBlogPostsData } from '@/utils/getBlogPostData'
import { getBlogPostMetaData } from '@/utils/getMetaData'
import { getSortOptions } from '@/utils/getSortOptions'
import { hasNoFiltersApplied } from '@/utils/searchParamsUtils'

import { useCategory } from '@/hooks/useCategory'
import { usePagination } from '@/hooks/usePagination'
import { useSearch } from '@/hooks/useSearch'
import { useSort } from '@/hooks/useSort'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { Category } from '@/components/Category'
import { CategoryResetButton } from '@/components/CategoryResetButton'
import { FilterContainer } from '@/components/FilterContainer'
import { NoResultsMessage } from '@/components/NoResultsMessage'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
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

const posts = getBlogPostsData()

const { categoryOptions, validCategoryIds } = getCategorySettings('blog_posts')

const { featured_entry, seo } = attributes

if (!featured_entry) {
  throw new Error('Featured entry is undefined')
}

const featuredPostSlug = path.parse(featured_entry).name
const featuredPost = getBlogPostData(featuredPostSlug)

export const metadata = createMetadata({
  seo,
  path: PATHS.BLOG.path,
  overrideDefaultTitle: true,
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
    defaultSortId: DEFAULT_SORT_OPTION.chronological,
  })

  const { categoryQuery, categorizedResults, categoryCounts } = useCategory({
    searchParams,
    entries: sortedResults,
    validCategoryIds: validCategoryIds,
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    searchParams,
    entries: categorizedResults,
  })

  const sortOptions = getSortOptions(DEFAULT_SORT_OPTION.chronological)

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
          alt: '',
          ...(featuredPost.image || graphicsData.imageFallback),
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
              search={<Search query={searchQuery} id="web-search" />}
              sort={
                <Sort
                  query={sortQuery}
                  options={sortOptions}
                  defaultOption={DEFAULT_SORT_OPTION.chronological}
                />
              }
            />

            <FilterContainer.MobileFiltersAndResults
              search={<Search query={searchQuery} id="mobile-search" />}
              sort={
                <Sort
                  query={sortQuery}
                  options={sortOptions}
                  defaultOption={DEFAULT_SORT_OPTION.chronological}
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

                      const tagLabel = getCategoryLabel({
                        collectionName: 'blog_posts',
                        category,
                      })

                      return (
                        <Card
                          key={slug}
                          title={title}
                          description={description}
                          textIsClamped={true}
                          metaData={getBlogPostMetaData(publishedOn)}
                          tagLabel={tagLabel}
                          cta={{
                            href: `${PATHS.BLOG.path}/${slug}`,
                            text: 'Read Post',
                            icon: BookOpen,
                          }}
                          image={{
                            alt: '',
                            ...(image || {
                              ...graphicsData.imageFallback,
                            }),
                            priority: isFirstTwoImages,
                            objectFit: 'cover',
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
