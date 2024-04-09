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

import { formatDate } from '@/utils/formatDate'

import { PATHS } from '@/constants/paths'

const POSTS_PER_LOAD = 20

const SEARCH_QUERY_KEY = 'search'
const PAGE_KEY = 'page'

export function BlogClient({ posts }: { posts: BlogPostData[] }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const [searchQuery, setSearchQuery] = useState<string>(() => {
    const searchQuery = searchParams.get(SEARCH_QUERY_KEY)
    return searchQuery || ''
  })

  const [currentPage, setCurrentPage] = useState<number>(() => {
    const activePage = searchParams.get(PAGE_KEY)

    if (activePage && Number.isInteger(Number(activePage))) {
      return Number(activePage)
    }
    return 1
  })

  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => {
      if (!a.publishedOn || !b.publishedOn) return 0

      const dateA = new Date(a.publishedOn).getTime()
      const dateB = new Date(b.publishedOn).getTime()
      return dateB - dateA
    })
  }, [posts])

  const filteredPosts = useMemo(() => {
    return sortedPosts.filter((post) => {
      return post.title.toLowerCase().includes(searchQuery.toLowerCase())
    })
  }, [searchQuery, sortedPosts])

  useEffect(() => {
    const paramsObject = { [SEARCH_KEY]: searchQuery, [PAGE_KEY]: currentPage }
    const newParams = buildSearchParams(paramsObject)

    window.history.replaceState({}, '', `${pathname}?${newParams}`)
    return () => window.history.replaceState({}, '', pathname)
  }, [currentPage, pathname, searchParams, searchQuery])

  function determineVisibilityClass(postIndex: number): string {
    const firstVisiblePostIndex = (currentPage - 1) * POSTS_PER_LOAD
    const firstInvisiblePostIndex = currentPage * POSTS_PER_LOAD

    const isVisible =
      postIndex >= firstVisiblePostIndex && postIndex < firstInvisiblePostIndex

    return isVisible ? 'block' : 'sr-only'
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentPage(1)
    setSearchQuery(event.target.value)
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

      <br />
      <br />

      {filteredPosts.length === 0 ? (
        <p className="mt-8 rounded-md border border-brand-600 p-4">
          No results found for your search, try changing your search query.
        </p>
      ) : (
        <>
          <CardLayout type="blogPost">
            {filteredPosts.map((post, index) => {
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
              currentPage={currentPage}
              total={filteredPosts.length}
              size={POSTS_PER_LOAD}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </>
      )}
    </>
  )
}
