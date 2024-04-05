'use client'

import { useState, useMemo, useEffect } from 'react'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'

import type { Route } from 'next'

import { BlogPostCard } from '@/components/BlogPostCard'
import { ClientPagination } from '@/components/ClientPagination'

import type { BlogPostData } from '@/types/blogPostTypes'

const POSTS_PER_LOAD = 20

const SEARCH_QUERY_KEY = 'search'
const PAGE_KEY = 'page'

export function BlogClient({ posts }: { posts: BlogPostData[] }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

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
      return post.title.toLowerCase().includes(searchQuery)
    })
  }, [searchQuery, sortedPosts])

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    if (searchQuery) params.set(SEARCH_QUERY_KEY, searchQuery)
    params.set(PAGE_KEY, String(currentPage))

    const url = `${pathname}?${params.toString()}` as Route
    router.replace(url, { scroll: false })

    return () => router.replace(pathname as Route, { scroll: false })
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

      <ul className="grid grid-cols-2 gap-8">
        {filteredPosts.map((post, i) => {
          return (
            <BlogPostCard
              key={post.slug}
              className={applyClasses(i)}
              post={post}
            />
          )
        })}
      </ul>

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
    setSearchQuery(event.target.value.toLowerCase())
  }

  function applyClasses(i: number) {
    // Only show 20 posts at a time, the rest show be hidden with sr-only
    if (
      i >= (currentPage - 1) * POSTS_PER_LOAD &&
      i < currentPage * POSTS_PER_LOAD
    ) {
      return 'block'
    }

    return 'sr-only'
  }
}
