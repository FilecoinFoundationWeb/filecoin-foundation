import dynamic from 'next/dynamic'

import { BookOpen } from '@phosphor-icons/react/dist/ssr'

import { type NextServerSearchParams } from '@/types/searchParams'

import { ALL_CATEGORIES_OPTION } from '@/constants/filterConstants'
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
import { Category } from '@/components/Category'
import { FilterContainer } from '@/components/FilterContainer'
import { NoSearchResultsMessage } from '@/components/NoSearchResultsMessage'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { Search } from '@/components/Search'
import { Sort } from '@/components/Sort'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { blogSortConfigs } from './constants/sortConfigs'
import { generateStructuredData } from './utils/generateStructuredData'
import { getBlogPostData, getBlogPostsData } from './utils/getBlogPostData'
import { getMetaData } from './utils/getMetaData'

const NoSSRPagination = dynamic(
  () => import('@/components/Pagination').then((module) => module.Pagination),
  { ssr: false },
)

type Props = {
  searchParams: NextServerSearchParams
}

const { seo, featuredEntry: featuredEntryPath } = getFrontmatter({
  path: PATHS.BLOG,
  zodParser: FeaturedPageFrontmatterSchema.parse,
})

const posts = getBlogPostsData()

const sortOptions = getSortOptions(blogSortConfigs)

const featuredPostSlug = extractSlugFromFilename(featuredEntryPath)
const featuredPost = getBlogPostData(featuredPostSlug)

export const metadata = createMetadata({
  seo: {
    ...seo,
    image: graphicsData.blog.data.src,
  },
  path: PATHS.BLOG.path,
  overrideDefaultTitle: true,
})

export default function Blog({ searchParams }: Props) {
  const { searchQuery, searchResults } = useSearch({
    searchParams,
    entries: posts,
    searchBy: ['title', 'description'],
  })

  const { sortQuery, sortedResults, defaultSortQuery } = useSort({
    searchParams,
    entries: searchResults,
    configs: blogSortConfigs,
    defaultsTo: 'newest',
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
    collectionName: 'blog_posts',
    fieldName: 'category',
    allOption: ALL_CATEGORIES_OPTION,
    entries: searchResults,
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
        metaData={getMetaData(featuredPost.publishedOn)}
        image={{
          ...(featuredPost.image || graphicsData.imageFallback.data),
          alt: '',
          objectFit: 'cover',
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
            category={<Category options={categoryOptionsWithCount} />}
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
              category={<Category options={categoryOptionsWithCount} />}
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
                          metaData={getMetaData(publishedOn)}
                          tagLabel={tagLabel}
                          cta={{
                            href: `${PATHS.BLOG.path}/${slug}`,
                            text: 'Read Post',
                            icon: BookOpen,
                          }}
                          image={{
                            ...(image || graphicsData.imageFallback.data),
                            alt: '',
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
