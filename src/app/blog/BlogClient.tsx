'use client'

import { useState, useMemo, useEffect } from 'react'

import Image from 'next/image'
import { useSearchParams, usePathname } from 'next/navigation'

import clsx from 'clsx'

import { CardLayout } from '@/components/CardLayout'
import { ClientPagination } from '@/components/ClientPagination'
import { Heading } from '@/components/Heading'
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
    return searchParams.get(SEARCH_QUERY_KEY) || ''
  })

  const [currentPage, setCurrentPage] = useState<number>(() => {
    const page = searchParams.get(PAGE_KEY)
    return page ? Number(page) : 1
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
    const params = new URLSearchParams(searchParams.toString())

    if (searchParams.get(SEARCH_QUERY_KEY) != searchQuery) {
      if (!searchQuery) params.delete(SEARCH_QUERY_KEY)
      if (searchQuery) params.set(SEARCH_QUERY_KEY, searchQuery)
    }

    if (searchParams.get(PAGE_KEY) != String(currentPage)) {
      params.set(PAGE_KEY, String(currentPage))
    }

    const url = `${pathname}?${params.toString()}`
    window.history.replaceState({}, '', url)

    return () => window.history.replaceState({}, '', pathname)
  }, [currentPage, searchQuery])

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

      <CardLayout type="blogPost">
        {filteredPosts.map((post, i) => {
          const { image, title, description, slug, publishedOn } = post

          return (
            <li
              key={post.slug}
              className={clsx(
                'h-[400px] overflow-clip rounded-md border border-brand-600 p-4',
                // Only show 20 posts at a time, the rest are hidden with sr-only
                i >= (currentPage - 1) * POSTS_PER_LOAD &&
                  i < currentPage * POSTS_PER_LOAD
                  ? 'block'
                  : 'sr-only',
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
                <span className="block">{formatDate(publishedOn, 'blog')}</span>
              )}
              <TextLink href={`${PATHS.BLOG.path}/${slug}`}>Read More</TextLink>
            </li>
          )
        })}
      </CardLayout>

      {!filteredPosts.length && (
        <p className="mt-8 rounded-md border border-brand-600 p-4">
          No results found for your search, try changing your search query.
        </p>
      )}

      <div className="mx-auto mt-8 max-w-2xl">
        <ClientPagination
          currentPage={currentPage}
          total={filteredPosts.length}
          size={POSTS_PER_LOAD}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  )

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentPage(1)
    setSearchQuery(event.target.value)
  }
}
