'use client'

import { useState, useMemo } from 'react'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

import clsx from 'clsx'

import { usePagination } from '@/hooks/usePagination'
import { useUpdateHistory } from '@/hooks/useUpdateHistory'

import { CardLayout } from '@/components/CardLayout'
import { Heading } from '@/components/Heading'
import { Pagination } from '@/components/Pagination'
import { TextLink } from '@/components/TextLink'

import { BlogPostData } from '@/types/blogPostTypes'

import { formatDate } from '@/utils/formatDate'

import { PATHS } from '@/constants/paths'

const POSTS_PER_PAGE = 20
const PAGE_KEY = 'page'
const SEARCH_KEY = 'search'

export function BlogClient({ posts }: { posts: BlogPostData[] }) {
  const searchParams = useSearchParams()

  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get(SEARCH_KEY) || '',
  )

  const filteredAndSortedPosts = useMemo(() => {
    return posts
      .filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      .sort((a, b) => {
        if (!a.publishedOn || !b.publishedOn) return 0
        return (
          new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime()
        )
      })
  }, [posts, searchQuery])

  const { currentPage, setCurrentPage, pageCount } = usePagination({
    totalEntries: filteredAndSortedPosts.length,
    entriesPerPage: POSTS_PER_PAGE,
    searchParams,
    currentPageKey: PAGE_KEY,
  })

  useUpdateHistory({
    searchQuery,
    currentPage,
    searchKey: SEARCH_KEY,
    pageKey: PAGE_KEY,
  })

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value)
    setCurrentPage(1)
  }

  function determineVisibilityClass(postIndex: number): string {
    const firstVisiblePostIndex = (currentPage - 1) * POSTS_PER_PAGE
    const firstInvisiblePostIndex = currentPage * POSTS_PER_PAGE
    const isVisible =
      postIndex >= firstVisiblePostIndex && postIndex < firstInvisiblePostIndex

    return isVisible ? 'block' : 'sr-only'
  }

  return (
    <>
      <label htmlFor="search">Search Blog Posts</label>
      <input
        type="search"
        id="search"
        name="search"
        value={searchQuery}
        aria-label="Search blog posts"
        className="text-brand-800"
        onChange={handleSearch}
      />

      {filteredAndSortedPosts.length === 0 ? (
        <p className="mt-8 rounded-md border border-brand-600 p-4">
          No results found for your search, try changing your search query.
        </p>
      ) : (
        <>
          <CardLayout type="blogPost">
            {filteredAndSortedPosts.map((post, index) => {
              const { image, title, description, slug, publishedOn } = post

              return (
                <li
                  key={post.slug}
                  className={clsx(
                    'h-[400px] overflow-clip rounded-md border border-brand-600 p-4',
                    determineVisibilityClass(index),
                  )}
                >
                  {image.url && (
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={282}
                      height={141}
                      className="object-cover"
                    />
                  )}
                  <Heading tag="h3" variant="lg">
                    {title}
                  </Heading>
                  <p>{description}</p>
                  {publishedOn && (
                    <span className="block">
                      {formatDate(publishedOn, 'blog')}
                    </span>
                  )}
                  <TextLink href={`${PATHS.BLOG.path}/${slug}`}>
                    Read More
                  </TextLink>
                </li>
              )
            })}
          </CardLayout>

          <div className="mx-auto mt-2 w-full sm:mt-8 sm:w-[560px] md:w-[600px]">
            <Pagination
              pageCount={pageCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </>
      )}
    </>
  )
}
