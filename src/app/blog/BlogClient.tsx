'use client'

import { useState, useMemo } from 'react'

import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { TextLink } from '@/components/TextLink'

import { BlogPostData } from '@/types/blogPostTypes'

import { formatDate } from '@/utils/formatDate'

import { PATHS } from '@/constants/paths'

const POSTS_PER_LOAD = 9

export function BlogClient({ posts }: { posts: BlogPostData[] }) {
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
        className="text-brand-800"
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
            <Heading tag="h3" variant="lg">
              {post.title}
            </Heading>
            <p>{post.f_description}</p>
            <span className="block">{formatDate(post.date, 'blog')}</span>
            <TextLink href={`${PATHS.BLOG.path}/${post.slug}`}>
              Read More
            </TextLink>
          </li>
        ))}
      </ul>
      {hasMorePosts && (
        <Button aria-label="Load more posts" onClick={handleLoadMore}>
          Load More
        </Button>
      )}
    </>
  )
}
