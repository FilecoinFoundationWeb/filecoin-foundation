'use client'

import { useState, useMemo, useEffect } from 'react'

import Image from 'next/image'
import { useSearchParams, usePathname } from 'next/navigation'

import clsx from 'clsx'

import { CardLayout } from '@/components/CardLayout'
import { Heading } from '@/components/Heading'
import { Pagination } from '@/components/Pagination'
import { TextLink } from '@/components/TextLink'

import { BlogPostData } from '@/types/blogPostTypes'

import { buildSearchParams } from '@/utils/buildSearchParams'
import { formatDate } from '@/utils/formatDate'
import { validatePageNumber } from '@/utils/validatePageNumber'

import { PATHS } from '@/constants/paths'

const POSTS_PER_PAGE = 20
const PAGE_KEY = 'page'
const SEARCH_KEY = 'search'

export function BlogClient({ posts }: { posts: BlogPostData[] }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()

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

  const pageCount = useMemo(
    () => Math.ceil(filteredAndSortedPosts.length / POSTS_PER_PAGE),
    [filteredAndSortedPosts.length],
  )

  const [currentPage, setCurrentPage] = useState<number>(() => {
    return validatePageNumber(searchParams.get(PAGE_KEY), pageCount)
  })

  useEffect(() => {
    const paramsObject = { [SEARCH_KEY]: searchQuery, [PAGE_KEY]: currentPage }
    const newParams = buildSearchParams(paramsObject)

    window.history.replaceState({}, '', `${pathname}?${newParams}`)

    return () => window.history.replaceState({}, '', pathname)
  }, [currentPage, pathname, searchQuery])

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

          <div className="mx-auto mt-8 max-w-2xl">
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
