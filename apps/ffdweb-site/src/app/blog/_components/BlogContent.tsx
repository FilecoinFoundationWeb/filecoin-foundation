'use client'

import { useSearchParams } from 'next/navigation'

import { Pagination, usePagination } from '@filecoin-foundation/ui/Pagination'
import { Search, useSearch } from '@filecoin-foundation/ui/Search'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import {
  PAGE_KEY,
  SEARCH_KEY,
} from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'
import { BookOpen } from '@phosphor-icons/react/dist/ssr'

import { PATHS } from '@/constants/paths'

import { Card } from '@/components/Card'

import dummyImageTwo from '@/assets/images/021024-guest-authorsalliance.png'
import dummyImageFour from '@/assets/images/043024_fundingthecommons_recap.png'
import dummyImageThree from '@/assets/images/0509-demo-qa.png'
import dummyImageOne from '@/assets/images/0711-divinc.png'

const dummyEntries = Array.from({ length: 200 }, (_, index) => ({
  title: `Post Title ${index + 1}`,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. sit amet consectetur adipisicing elit. Quisquam, quos.',
  publishedOn: getRandomDate().toISOString().split('T')[0],
  slug: `post-title-${index + 1}`,
  image: [dummyImageOne, dummyImageTwo, dummyImageThree, dummyImageFour][
    Math.floor(Math.random() * 4)
  ],
}))

export function BlogContent() {
  const clientSearchParams = useSearchParams()
  const searchParams = Object.fromEntries(clientSearchParams.entries())

  const { searchQuery, searchResults } = useSearch({
    searchQuery: normalizeQueryParam(searchParams, SEARCH_KEY),
    entries: dummyEntries,
    searchBy: 'title',
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    pageQuery: normalizeQueryParam(searchParams, PAGE_KEY),
    entries: searchResults,
    entriesPerPage: 12,
  })

  return (
    <section className="mx-auto max-w-5xl">
      <div className="flex justify-end pb-8">
        <div className="lg:max-w-readable">
          <Search query={searchQuery} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {paginatedResults.map((entry, index) => (
          <Card
            key={index}
            title={entry.title}
            description={{ text: entry.description, isClamped: true }}
            metaData={[entry.publishedOn, 'Test']}
            tags={[
              { text: 'Category 1', variant: 'primary' },
              { text: 'Category 2', variant: 'secondary' },
            ]}
            cta={{
              href: `${PATHS.BLOG.path}/${entry.slug}`,
              text: 'Read More',
              icon: BookOpen,
            }}
            image={{
              ...entry.image,
              alt: '',
              objectFit: 'cover',
              sizes: buildImageSizeProp({
                startSize: '100vw',
                sm: '350px',
                md: '470px',
                lg: '360px',
              }),
            }}
          />
        ))}
      </div>

      <br />
      <br />

      <div className="mx-auto max-w-2xl">
        <Pagination pageCount={pageCount} currentPage={currentPage} />
      </div>
    </section>
  )
}

function getRandomDate() {
  return new Date(
    2023 + Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28) + 1,
  )
}
