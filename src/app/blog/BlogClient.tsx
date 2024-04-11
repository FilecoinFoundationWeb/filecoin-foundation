'use client'

import { useState, useMemo } from 'react'

import { useSearchParams } from 'next/navigation'

import { usePagination } from '@/hooks/usePagination'
import { useUpdateHistory } from '@/hooks/useUpdateHistory'

import { Card } from '@/components/Card'
import { CardLayout } from '@/components/CardLayout'
import { Pagination } from '@/components/Pagination'

import { BlogPostData } from '@/types/blogPostTypes'

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
              const { image, title, description, slug } = post

              return (
                <div
                  key={post.slug}
                  className={determineVisibilityClass(index)}
                >
                  <Card
                    title={title}
                    description={description}
                    cta={{
                      href: `${PATHS.BLOG.path}/${slug}`,
                      text: 'Read Post',
                    }}
                    image={{
                      url: image?.url,
                      alt: image?.alt,
                    }}
                    textIsClamped={true}
                  />
                </div>
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
