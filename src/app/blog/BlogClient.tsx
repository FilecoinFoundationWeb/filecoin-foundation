'use client'

import { useState, useMemo } from 'react'

import Image from 'next/image'

import CustomLink from '@/components/CustomLink'

import { BlogPostData } from '@/types/blogPostTypes'

import { formatDate } from '@/utils/formatDate'

const POSTS_PER_LOAD = 9

export default function BlogClient({ posts }: { posts: BlogPostData[] }) {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [visibleCount, setVisibleCount] = useState<number>(POSTS_PER_LOAD)

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value.toLowerCase())
    setVisibleCount(POSTS_PER_LOAD)
  }

  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })
  }, [posts])

  const filteredPosts = sortedPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery)
  )

  function handleLoadMore() {
    setVisibleCount((currentCount) => currentCount + POSTS_PER_LOAD)
  }

  const hasMorePosts = visibleCount < filteredPosts.length

  return (
    <>
      <label htmlFor="search">Search Blog Posts</label>
      <input
        type="search"
        id="search"
        name="search"
        aria-label="Search blog posts"
        onChange={handleSearch}
      />
      <ul>
        {filteredPosts.slice(0, visibleCount).map((post) => (
          <li key={post.slug}>
            {post.f_image.url && (
              <Image
                src={post.f_image.url}
                alt={post.f_image.alt || post.title}
                width={282}
                height={141}
                className="object-cover"
              />
            )}
            <h3>{post.title}</h3>
            <p>{post.f_description}</p>
            <span className="block">{formatDate(post.date, 'blog')}</span>
            <CustomLink href={`/blog/${post.slug}`}>Read More</CustomLink>
          </li>
        ))}
      </ul>
      {hasMorePosts && (
        <button aria-label="Load more posts" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </>
  )
}
