'use client'

import { useState, useMemo } from 'react'

import { BlogPostCard } from '@/components/BlogPostCard'
import { Button } from '@/components/Button'

import type { BlogPostData } from '@/types/blogPostTypes'

const POSTS_PER_LOAD = 20

export function BlogClient({ posts }: { posts: BlogPostData[] }) {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [visibleCount, setVisibleCount] = useState<number>(POSTS_PER_LOAD)

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value.toLowerCase())
    setVisibleCount(POSTS_PER_LOAD)
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

  function handleLoadMore() {
    setVisibleCount((currentCount) => currentCount + POSTS_PER_LOAD)
  }

  const visiblePosts = filteredPosts.slice(0, visibleCount)
  const hiddenPosts = filteredPosts.slice(visibleCount)

  const hasMorePosts = visibleCount < filteredPosts.length

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
        {visiblePosts.slice(0, visibleCount).map((post) => {
          return <BlogPostCard key={post.slug} post={post} />
        })}
        {hiddenPosts.map((post) => {
          return (
            <BlogPostCard key={post.slug} post={post} className="sr-only" />
          )
        })}
      </ul>
      {hasMorePosts && (
        <Button aria-label="Load more posts" onClick={handleLoadMore}>
          Load More
        </Button>
      )}
    </>
  )
}
