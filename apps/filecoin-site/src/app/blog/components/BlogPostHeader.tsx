import Image from 'next/image'

import { Heading } from '@/components/Heading'

import { BlogPostContainer } from './BlogPostContainer'
import { Categories } from './Categories'

type BlogPostHeaderProps = {
  image: string
  categories: Array<string> | string
  author: string
  date: Date
  title: string
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
        <div className="flex justify-between">
          <Categories categories={categories} />
          <p>Share Post Component</p>
        </div>

        <hr className="mt-10 mb-16 border-zinc-200" />

        <p className="mb-8 font-mono text-sm text-zinc-800">
          {author},{' '}
          {date.toLocaleDateString('en-US', {
            dateStyle: 'long',
          })}
        </p>

        <div className="mb-8">
          <Heading tag="h1" variant="4xl-medium">
            {title}
          </Heading>
        </div>
      </BlogPostContainer>
    </header>
  )
}
