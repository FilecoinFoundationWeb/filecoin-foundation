import Image from 'next/image'

import { Heading } from '@/components/Heading'
import { SectionDivider } from '@/components/SectionDivider'

import { BlogPostContainer } from './BlogPostContainer'
import { Categories } from './Categories'
import { PostMetadata } from './PostMetadata'

type BlogPostHeaderProps = {
  image: string
  categories: Array<string> | string
  title: string
  author: string
  date: Date
}

export function BlogPostHeader({
  image,
  categories,
  title,
  author,
  date,
}: BlogPostHeaderProps) {
  return (
    <header>
      <div className="relative mb-10 min-h-80">
        <Image
          fill
          priority
          quality={100}
          src={image}
          alt=""
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <BlogPostContainer>
        <div className="mb-10 flex justify-between">
          <Categories categories={categories} />
          <p>Share Post Component</p>
        </div>

        <SectionDivider variant="light" />

        <div className="mt-16 mb-8">
          <PostMetadata author={author} date={date} />
        </div>

        <Heading tag="h1" variant="4xl-medium">
          {title}
        </Heading>
      </BlogPostContainer>
    </header>
  )
}
