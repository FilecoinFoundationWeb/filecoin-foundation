'use client'

import { useState, useMemo } from 'react'

import { BlogPostCard } from '@/components/BlogPostCard'
import { ClientPagination } from '@/components/ClientPagination'

import type { BlogPostData } from '@/types/blogPostTypes'

const POSTS_PER_LOAD = 20

export function BlogClient({ posts }: { posts: BlogPostData[] }) {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value.toLowerCase())
  }

  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => {
      if (!a.publishedOn || !b.publishedOn) return 0

      const dateA = new Date(a.publishedOn).getTime()
      const dateB = new Date(b.publishedOn).getTime()
      return dateB - dateA
    })
  }, [posts])

  const filteredPosts = useMemo(
    () =>
      sortedPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchQuery)
      }),
    [searchQuery, sortedPosts],
  )

  return (
    <>
      <label htmlFor="search">Search Blog Posts</label>
      <input
        type="search"
        id="search"
        name="search"
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
